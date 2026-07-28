import crypto from "node:crypto";
import type { Appointment } from "../data/store.js";

type GoogleCalendarConfig = {
  calendarId: string;
  clientEmail: string;
  privateKey: string;
  timeZone: string;
};

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_CALENDAR_API_BASE = "https://www.googleapis.com/calendar/v3";
const GOOGLE_SCOPE = "https://www.googleapis.com/auth/calendar.events";

let cachedAccessToken: { token: string; expiresAt: number } | null = null;

function getConfig(): GoogleCalendarConfig | null {
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();
  const timeZone = process.env.GOOGLE_CALENDAR_TIME_ZONE?.trim() || "Europe/Paris";

  if (!calendarId || !clientEmail || !privateKey) {
    return null;
  }

  return { calendarId, clientEmail, privateKey, timeZone };
}

function base64UrlEncode(input: string | Buffer) {
  return Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function buildJwtAssertion(config: GoogleCalendarConfig) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: config.clientEmail,
    scope: GOOGLE_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };

  const unsigned = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(payload))}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = signer.sign(config.privateKey);
  return `${unsigned}.${base64UrlEncode(signature)}`;
}

async function getAccessToken(config: GoogleCalendarConfig) {
  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now() + 60_000) {
    return cachedAccessToken.token;
  }

  const jwt = buildJwtAssertion(config);
  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Google OAuth token request failed (${response.status}): ${details}`);
  }

  const body = await response.json() as { access_token?: string; expires_in?: number };
  if (!body.access_token) {
    throw new Error("Google OAuth token response missing access_token");
  }

  cachedAccessToken = {
    token: body.access_token,
    expiresAt: Date.now() + ((body.expires_in ?? 3600) * 1000),
  };

  return body.access_token;
}

function formatFormatLabel(format: Appointment["booking"]["format"]) {
  switch (format) {
    case "telephone":
      return "Consultation par téléphone";
    case "whatsapp":
      return "Consultation sur WhatsApp";
    default:
      return "Consultation en visio";
  }
}

function buildEventPayload(appointment: Appointment) {
  const timeZone = process.env.GOOGLE_CALENDAR_TIME_ZONE?.trim() || "Europe/Paris";
  const description = [
    `Client: ${appointment.customer.firstName} ${appointment.customer.lastName}`,
    `Téléphone: ${appointment.customer.phone}`,
    `Email: ${appointment.customer.email}`,
    `Format: ${formatFormatLabel(appointment.booking.format)}`,
    `Budget: ${appointment.project.budget}`,
    `Type de véhicule: ${appointment.project.vehicleType}`,
    appointment.project.description ? `Projet: ${appointment.project.description}` : null,
  ].filter(Boolean).join("\n");

  return {
    summary: `VroomAdvisor - ${appointment.customer.firstName} ${appointment.customer.lastName}`,
    description,
    start: {
      dateTime: appointment.startAt ?? new Date().toISOString(),
      timeZone,
    },
    end: {
      dateTime: appointment.endAt ?? appointment.startAt ?? new Date().toISOString(),
      timeZone,
    },
    location: "VroomAdvisor - 4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency",
  };
}

async function googleCalendarRequest<T>(method: string, path: string, body?: unknown): Promise<T> {
  const config = getConfig();
  if (!config) {
    throw new Error("Google Calendar is not configured");
  }

  const accessToken = await getAccessToken(config);
  const response = await fetch(`${GOOGLE_CALENDAR_API_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Google Calendar API ${method} ${path} failed (${response.status}): ${details}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

function logCalendarError(action: string, appointmentId: string, error: unknown) {
  console.error(`Google Calendar ${action} failed`, {
    appointmentId,
    error: error instanceof Error ? error.message : error,
  });
}

export async function createGoogleCalendarEvent(appointment: Appointment) {
  try {
    const config = getConfig();
    if (!config) return null;
    const event = await googleCalendarRequest<{ id?: string }>("POST", `/calendars/${encodeURIComponent(config.calendarId)}/events`, buildEventPayload(appointment));
    return event.id ?? null;
  } catch (error) {
    logCalendarError("create", appointment.id, error);
    return null;
  }
}

export async function updateGoogleCalendarEvent(appointment: Appointment) {
  if (!appointment.calendarEventId) return null;

  try {
    const config = getConfig();
    if (!config) return null;
    await googleCalendarRequest("PUT", `/calendars/${encodeURIComponent(config.calendarId)}/events/${encodeURIComponent(appointment.calendarEventId)}`, buildEventPayload(appointment));
    return appointment.calendarEventId;
  } catch (error) {
    logCalendarError("update", appointment.id, error);
    return null;
  }
}

export async function deleteGoogleCalendarEvent(appointment: Appointment) {
  if (!appointment.calendarEventId) return false;

  try {
    const config = getConfig();
    if (!config) return false;
    await googleCalendarRequest("DELETE", `/calendars/${encodeURIComponent(config.calendarId)}/events/${encodeURIComponent(appointment.calendarEventId)}`);
    return true;
  } catch (error) {
    logCalendarError("delete", appointment.id, error);
    return false;
  }
}
