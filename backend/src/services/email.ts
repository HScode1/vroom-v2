import { Resend } from "resend";
import { store } from "../data/store.js";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");
const DEFAULT_FROM = "VroomAdvisor <reservations@vroomparis.fr>";
const TEAM_EMAIL = process.env.TEAM_EMAIL ?? "contact@vroomparis.fr";
const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:5173";

function getFromAddress(): string {
  return process.env.EMAIL_FROM?.trim() || DEFAULT_FROM;
}

function buildIcs(params: {
  date: string;
  time: string;
  durationMinutes: number;
  format: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}): string {
  const { date, time, durationMinutes, format, firstName, lastName, email, phone } = params;
  const safeFirstName = escapeIcsText(firstName);
  const safeLastName = escapeIcsText(lastName);
  const safeEmail = escapeIcsText(email);
  const safePhone = escapeIcsText(phone);

  const [year, month, day] = date.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);
  const start = new Date(year, month - 1, day, hours, minutes);
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

  const pad = (n: number) => String(n).padStart(2, "0");
  const fmt = (d: Date) =>
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

  const formatLabel =
    format === "telephone"
      ? "Consultation par téléphone"
      : format === "whatsapp"
        ? "Consultation sur WhatsApp"
        : "Consultation en visio";

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//VroomAdvisor//FR",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:RDV VroomAdvisor — ${safeFirstName} ${safeLastName}`,
    `DESCRIPTION:Format : ${escapeIcsText(formatLabel)}\\nClient : ${safeFirstName} ${safeLastName}\\nTél : ${safePhone}\\nEmail : ${safeEmail}`,
    `ORGANIZER;CN=VroomAdvisor:mailto:${TEAM_EMAIL}`,
    `ATTENDEE;CN=${safeFirstName} ${safeLastName}:mailto:${safeEmail}`,
    "LOCATION:VroomAdvisor - 4 bis Av. Alexandre Dumas\\, 95230 Soisy-sous-Montmorency",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function formatDate(date: string): string {
  const d = new Date(`${date}T12:00:00`);
  const weekday = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(d);
  const day = new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(d);
  const month = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(d);
  const year = new Intl.DateTimeFormat("fr-FR", { year: "numeric" }).format(d);
  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${day} ${month} ${year}`;
}

function formatLabel(format: string): string {
  if (format === "telephone") return "Téléphone";
  if (format === "whatsapp") return "WhatsApp";
  return "Visioconférence";
}

function formatMoney(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeIcsText(value: string): string {
  return value
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replace(/\r?\n/g, "\\n");
}

type EmailSendParams = {
  type: string;
  template: string;
  to: string;
  subject: string;
  html: string;
  attachments?: { filename: string; content: string }[];
  metadata?: Record<string, unknown>;
};

async function logEmailFailure(logId: string | null, error: string) {
  if (!logId) return;
  try {
    await store.emailLogs.update(logId, { status: "failed", error });
  } catch (logError) {
    console.error("Failed to update email log as failed:", logError);
  }
}

async function logEmailSuccess(logId: string | null, providerId: string | null) {
  if (!logId) return;
  try {
    await store.emailLogs.update(logId, { status: "sent", providerId, error: null });
  } catch (logError) {
    console.error("Failed to update email log as sent:", logError);
  }
}

async function sendTrackedEmail(params: EmailSendParams) {
  let logId: string | null = null;

  try {
    const log = await store.emailLogs.create({
      type: params.type,
      template: params.template,
      recipient: params.to,
      subject: params.subject,
      status: "pending",
      providerId: null,
      error: null,
      metadata: params.metadata ?? {},
    });
    logId = log.id;
  } catch (logError) {
    console.error("Failed to create email log:", logError);
  }

  if (!process.env.RESEND_API_KEY) {
    const error = new Error("RESEND_API_KEY is not configured");
    await logEmailFailure(logId, error.message);
    console.error("Email send failed", {
      type: params.type,
      template: params.template,
      recipient: params.to,
      error: error.message,
    });
    throw error;
  }

  try {
    const response = await resend.emails.send({
      from: getFromAddress(),
      to: params.to,
      subject: params.subject,
      html: params.html,
      attachments: params.attachments,
    });

    const providerId = (response as { data?: { id?: string } } | undefined)?.data?.id ?? null;
    await logEmailSuccess(logId, providerId);
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    await logEmailFailure(logId, message);
    console.error("Email send failed", {
      type: params.type,
      template: params.template,
      recipient: params.to,
      error,
    });
    throw error;
  }
}

export async function sendContactConfirmationToClient(params: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
}) {
  const { firstName, lastName, email, subject } = params;
  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#181818;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#181818;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1e1e1e;border-radius:24px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
        <tr><td style="padding:40px 36px 32px;text-align:center;">
          <div style="width:72px;height:72px;background:rgba(188,255,61,0.12);border:1px solid rgba(188,255,61,0.25);border-radius:24px;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;font-size:32px;color:#bcff3d;">✓</div>
          <h1 style="margin:0 0 12px;font-size:28px;font-weight:800;color:#ffffff;">Message bien reçu</h1>
          <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.65);line-height:1.6;">
            Bonjour <strong style="color:rgba(255,255,255,0.9);">${safeFirstName}</strong>, nous avons bien reçu votre demande.
          </p>
        </td></tr>
        <tr><td style="padding:0 36px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Nom</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${safeFirstName} ${safeLastName}</div>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Sujet</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${safeSubject}</div>
            </td></tr>
            <tr><td style="padding:16px 20px;">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Email de contact</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);"><a href="mailto:${safeEmail}" style="color:#bcff3d;">${safeEmail}</a></div>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:0 36px 32px;text-align:center;">
          <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.35);line-height:1.6;">
            Un membre de l'équipe vous répondra sous 24h ouvrées.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  </body>
  </html>`;

  await sendTrackedEmail({
    type: "contact",
    template: "contact_confirmation",
    to: email,
    subject: `VroomAdvisor - confirmation de réception`,
    html,
    metadata: { firstName, lastName, email, subject },
  });
}

export async function sendContactNotificationToTeam(params: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { firstName, lastName, email, subject, message } = params;
  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
        <tr><td style="background:#181818;padding:20px 28px;">
          <span style="font-size:18px;font-weight:800;color:#ffffff;">Vroom<span style="color:#bcff3d;">Advisor</span></span>
          <span style="float:right;background:#bcff3d;color:#000;font-size:11px;font-weight:700;padding:4px 10px;border-radius:100px;">Nouveau contact</span>
        </td></tr>
        <tr><td style="padding:28px;">
          <h2 style="margin:0 0 20px;font-size:20px;color:#111827;">Nouveau message depuis le site</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Contact</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Nom :</strong> <span style="color:#111827;">${safeFirstName} ${safeLastName}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Email :</strong> <a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Sujet :</strong> <span style="color:#111827;">${safeSubject}</span></td></tr>
              </table>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Message</td></tr>
            <tr><td style="padding:16px;font-size:14px;color:#111827;line-height:1.7;white-space:pre-wrap;">${safeMessage}</td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
  </body>
  </html>`;

  await sendTrackedEmail({
    type: "contact",
    template: "contact_notification",
    to: TEAM_EMAIL,
    subject: `Nouveau contact — ${firstName} ${lastName} · ${subject}`,
    html,
    metadata: { firstName, lastName, email, subject },
  });
}

export async function sendBuyRequestConfirmationToClient(params: {
  requestId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  vehicleCriteria: {
    brand: string;
    model: string;
    year: string;
    gearbox: string;
    fuel: string;
    maxBudget: number;
    timeframe: string;
    notes: string;
  };
}) {
  const { requestId, customer, vehicleCriteria } = params;
  const safeFirstName = escapeHtml(customer.firstName);
  const safeLastName = escapeHtml(customer.lastName);
  const safeBrand = escapeHtml(vehicleCriteria.brand || "Non précisée");
  const safeModel = escapeHtml(vehicleCriteria.model || "Non précisé");
  const safeYear = escapeHtml(vehicleCriteria.year || "Peu importe");
  const safeGearbox = escapeHtml(vehicleCriteria.gearbox || "Peu importe");
  const safeFuel = escapeHtml(vehicleCriteria.fuel || "Peu importe");
  const safeTimeframe = escapeHtml(vehicleCriteria.timeframe);
  const safeNotes = escapeHtml(vehicleCriteria.notes || "");

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#181818;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#181818;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1e1e1e;border-radius:24px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
        <tr><td style="padding:40px 36px 32px;text-align:center;">
          <div style="width:72px;height:72px;background:rgba(188,255,61,0.12);border:1px solid rgba(188,255,61,0.25);border-radius:24px;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;font-size:32px;color:#bcff3d;">✓</div>
          <h1 style="margin:0 0 12px;font-size:28px;font-weight:800;color:#ffffff;">Demande d'achat reçue</h1>
          <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.65);line-height:1.6;">
            Bonjour <strong style="color:rgba(255,255,255,0.9);">${safeFirstName} ${safeLastName}</strong>, nous avons bien reçu votre demande.
            Notre équipe vous recontactera sous 24h ouvrées.
          </p>
        </td></tr>
        <tr><td style="padding:0 36px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Référence</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${escapeHtml(requestId)}</div>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Véhicule recherché</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${safeBrand} ${safeModel}</div>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Préférences</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${safeYear} · ${safeGearbox} · ${safeFuel}</div>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Budget & délai</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${formatMoney(vehicleCriteria.maxBudget)} € · ${safeTimeframe}</div>
            </td></tr>
            ${safeNotes ? `<tr><td style="padding:16px 20px;"><div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Notes</div><div style="font-size:14px;color:rgba(255,255,255,0.9);line-height:1.6;white-space:pre-wrap;">${safeNotes}</div></td></tr>` : ""}
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await sendTrackedEmail({
    type: "buy_request",
    template: "buy_request_confirmation",
    to: customer.email,
    subject: "VroomAdvisor - demande d'achat reçue",
    html,
    metadata: { requestId, customer, vehicleCriteria },
  });
}

export async function sendBuyRequestNotificationToTeam(params: {
  requestId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  vehicleCriteria: {
    brand: string;
    model: string;
    trim: string;
    year: string;
    gearbox: string;
    fuel: string;
    maxMileage: number;
    maxBudget: number;
    timeframe: string;
    notes: string;
  };
}) {
  const { requestId, customer, vehicleCriteria } = params;
  const safeFirstName = escapeHtml(customer.firstName);
  const safeLastName = escapeHtml(customer.lastName);
  const safeEmail = escapeHtml(customer.email);
  const safePhone = escapeHtml(customer.phone);
  const safeBrand = escapeHtml(vehicleCriteria.brand || "Non précisée");
  const safeModel = escapeHtml(vehicleCriteria.model || "Non précisé");
  const safeTrim = escapeHtml(vehicleCriteria.trim || "Non précisé");
  const safeYear = escapeHtml(vehicleCriteria.year || "Peu importe");
  const safeGearbox = escapeHtml(vehicleCriteria.gearbox || "Peu importe");
  const safeFuel = escapeHtml(vehicleCriteria.fuel || "Peu importe");
  const safeTimeframe = escapeHtml(vehicleCriteria.timeframe);
  const safeNotes = escapeHtml(vehicleCriteria.notes || "");
  const safeBudget = escapeHtml(`${formatMoney(vehicleCriteria.maxBudget)} €`);
  const safeMileage = escapeHtml(vehicleCriteria.maxMileage > 0 ? `${formatMoney(vehicleCriteria.maxMileage)} km max` : "Non précisé");

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
        <tr><td style="background:#181818;padding:20px 28px;">
          <span style="font-size:18px;font-weight:800;color:#ffffff;">Vroom<span style="color:#bcff3d;">Advisor</span></span>
          <span style="float:right;background:#bcff3d;color:#000;font-size:11px;font-weight:700;padding:4px 10px;border-radius:100px;">Nouvelle demande d'achat</span>
        </td></tr>
        <tr><td style="padding:28px;">
          <h2 style="margin:0 0 20px;font-size:20px;color:#111827;">Demande d'achat #{requestId}</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Client</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Nom :</strong> <span style="color:#111827;">${safeFirstName} ${safeLastName}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Email :</strong> <a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Téléphone :</strong> <a href="tel:${safePhone}" style="color:#2563eb;">${safePhone}</a></td></tr>
              </table>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Critères véhicule</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Marque / modèle :</strong> <span style="color:#111827;">${safeBrand} ${safeModel}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Finition :</strong> <span style="color:#111827;">${safeTrim}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Année :</strong> <span style="color:#111827;">${safeYear}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Boîte / carburant :</strong> <span style="color:#111827;">${safeGearbox} · ${safeFuel}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Budget / délai :</strong> <span style="color:#111827;">${safeBudget} · ${safeTimeframe}</span></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Kilométrage :</strong> <span style="color:#111827;">${safeMileage}</span></td></tr>
              </table>
            </td></tr>
          </table>
          ${safeNotes ? `<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;"><tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Notes</td></tr><tr><td style="padding:16px;font-size:14px;color:#111827;line-height:1.7;white-space:pre-wrap;">${safeNotes}</td></tr></table>` : ""}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await sendTrackedEmail({
    type: "buy_request",
    template: "buy_request_notification",
    to: TEAM_EMAIL,
    subject: `Nouvelle demande d'achat — ${customer.firstName} ${customer.lastName}`,
    html,
    metadata: { requestId, customer, vehicleCriteria },
  });
}

export async function sendSellRequestConfirmationToClient(params: {
  requestId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  vehicle: {
    brand: string;
    model: string;
    trim: string;
    year: number;
    mileage: number;
    gearbox: string;
    fuel: string;
    color: string;
    doors: number;
    notes: string;
    photos: string[];
  };
}) {
  const { requestId, customer, vehicle } = params;
  const safeFirstName = escapeHtml(customer.firstName);
  const safeLastName = escapeHtml(customer.lastName);
  const safeBrand = escapeHtml(vehicle.brand);
  const safeModel = escapeHtml(vehicle.model);
  const safeTrim = escapeHtml(vehicle.trim || "Non précisée");
  const safeGearbox = escapeHtml(vehicle.gearbox);
  const safeFuel = escapeHtml(vehicle.fuel);
  const safeColor = escapeHtml(vehicle.color || "Non précisée");
  const safeNotes = escapeHtml(vehicle.notes || "");
  const safePhotos = vehicle.photos.map((photo, index) => ({
    label: `Photo ${index + 1}`,
    url: escapeHtml(photo),
  }));

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#181818;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#181818;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1e1e1e;border-radius:24px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
        <tr><td style="padding:40px 36px 32px;text-align:center;">
          <div style="width:72px;height:72px;background:rgba(188,255,61,0.12);border:1px solid rgba(188,255,61,0.25);border-radius:24px;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;font-size:32px;color:#bcff3d;">✓</div>
          <h1 style="margin:0 0 12px;font-size:28px;font-weight:800;color:#ffffff;">Demande de reprise reçue</h1>
          <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.65);line-height:1.6;">
            Bonjour <strong style="color:rgba(255,255,255,0.9);">${safeFirstName}</strong>, nous avons bien reçu votre demande.
            Notre équipe vous recontactera sous 24h ouvrées.
          </p>
        </td></tr>
        <tr><td style="padding:0 36px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Référence</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${escapeHtml(requestId)}</div>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Véhicule</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${safeBrand} ${safeModel}</div>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Détails</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${vehicle.year} · ${vehicle.mileage.toLocaleString("fr-FR")} km · ${safeGearbox} · ${safeFuel}</div>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Finition / couleur / portes</div>
              <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${safeTrim} · ${safeColor} · ${vehicle.doors} portes</div>
            </td></tr>
            ${safeNotes ? `<tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Notes</div><div style="font-size:14px;color:rgba(255,255,255,0.9);line-height:1.6;white-space:pre-wrap;">${safeNotes}</div></td></tr>` : ""}
            <tr><td style="padding:16px 20px;">
              <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:10px;">Photos transmises</div>
              ${safePhotos.length > 0 ? safePhotos.map((photo) => `<div style="font-size:13px;line-height:1.7;margin-bottom:6px;"><a href="${photo.url}" style="color:#bcff3d;">${photo.label}</a></div>`).join("") : '<div style="font-size:13px;color:rgba(255,255,255,0.6);">Aucune photo ajoutée.</div>'}
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await sendTrackedEmail({
    type: "sell_request",
    template: "sell_request_confirmation",
    to: customer.email,
    subject: "VroomAdvisor - demande de reprise reçue",
    html,
    metadata: { requestId, customer, vehicle },
  });
}

export async function sendSellRequestNotificationToTeam(params: {
  requestId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  vehicle: {
    brand: string;
    model: string;
    trim: string;
    year: number;
    mileage: number;
    gearbox: string;
    fuel: string;
    color: string;
    doors: number;
    notes: string;
    photos: string[];
  };
}) {
  const { requestId, customer, vehicle } = params;
  const safeFirstName = escapeHtml(customer.firstName);
  const safeLastName = escapeHtml(customer.lastName);
  const safeEmail = escapeHtml(customer.email);
  const safePhone = escapeHtml(customer.phone);
  const safeBrand = escapeHtml(vehicle.brand);
  const safeModel = escapeHtml(vehicle.model);
  const safeTrim = escapeHtml(vehicle.trim || "Non précisée");
  const safeGearbox = escapeHtml(vehicle.gearbox);
  const safeFuel = escapeHtml(vehicle.fuel);
  const safeColor = escapeHtml(vehicle.color || "Non précisée");
  const safeNotes = escapeHtml(vehicle.notes || "");
  const photoLinks = vehicle.photos.map((photo, index) => `<li style="margin-bottom:6px;"><a href="${escapeHtml(photo)}" style="color:#2563eb;">Photo ${index + 1}</a></li>`).join("");

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
        <tr><td style="background:#181818;padding:20px 28px;">
          <span style="font-size:18px;font-weight:800;color:#ffffff;">Vroom<span style="color:#bcff3d;">Advisor</span></span>
          <span style="float:right;background:#bcff3d;color:#000;font-size:11px;font-weight:700;padding:4px 10px;border-radius:100px;">Nouvelle demande de reprise</span>
        </td></tr>
        <tr><td style="padding:28px;">
          <h2 style="margin:0 0 20px;font-size:20px;color:#111827;">Demande de reprise #{escapeHtml(requestId)}</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Client</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Nom :</strong> <span style="color:#111827;">${safeFirstName} ${safeLastName}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Email :</strong> <a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Téléphone :</strong> <a href="tel:${safePhone}" style="color:#2563eb;">${safePhone}</a></td></tr>
              </table>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Véhicule</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Marque / modèle :</strong> <span style="color:#111827;">${safeBrand} ${safeModel}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Finition :</strong> <span style="color:#111827;">${safeTrim}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Année / kilométrage :</strong> <span style="color:#111827;">${vehicle.year} · ${vehicle.mileage.toLocaleString("fr-FR")} km</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Boîte / carburant :</strong> <span style="color:#111827;">${safeGearbox} · ${safeFuel}</span></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Couleur / portes :</strong> <span style="color:#111827;">${safeColor} · ${vehicle.doors} portes</span></td></tr>
              </table>
            </td></tr>
          </table>
          ${safeNotes ? `<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;"><tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Notes</td></tr><tr><td style="padding:16px;font-size:14px;color:#111827;line-height:1.7;white-space:pre-wrap;">${safeNotes}</td></tr></table>` : ""}
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Photos</td></tr>
            <tr><td style="padding:16px;font-size:14px;color:#111827;line-height:1.7;">
              ${photoLinks || '<span style="color:#6b7280;">Aucune photo ajoutée.</span>'}
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await sendTrackedEmail({
    type: "sell_request",
    template: "sell_request_notification",
    to: TEAM_EMAIL,
    subject: `Nouvelle demande de reprise — ${customer.firstName} ${customer.lastName}`,
    html,
    metadata: { requestId, customer, vehicle },
  });
}

export async function sendBookingConfirmationToClient(params: {
  bookingId: string;
  cancelToken: string;
  rescheduleToken: string;
  date: string;
  time: string;
  durationMinutes: number;
  format: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) {
  const { bookingId, cancelToken, rescheduleToken, date, time, durationMinutes, format, firstName, lastName, email } = params;
  const dateLabel = formatDate(date);
  const formatStr = formatLabel(format);
  const safeFirstName = escapeHtml(firstName);
  const managementUrl = new URL("/conseils/formulaire/etape-2", FRONTEND_URL);
  managementUrl.searchParams.set("bookingId", bookingId);
  managementUrl.searchParams.set("cancelToken", cancelToken);
  managementUrl.searchParams.set("rescheduleToken", rescheduleToken);
  managementUrl.searchParams.set("date", date);
  managementUrl.searchParams.set("slot", time);
  managementUrl.searchParams.set("duration", `${durationMinutes} min`);
  managementUrl.searchParams.set("format", format);
  managementUrl.searchParams.set("firstName", firstName);
  managementUrl.searchParams.set("lastName", lastName);
  managementUrl.searchParams.set("email", email);

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#181818;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#181818;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1e1e1e;border-radius:24px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">

        <!-- Header -->
        <tr><td style="background:#1a1a1a;padding:28px 36px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td><span style="font-size:20px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Vroom<span style="color:#bcff3d;">Advisor</span></span></td>
              <td align="right"><span style="background:rgba(188,255,61,0.12);border:1px solid rgba(188,255,61,0.25);color:#bcff3d;font-size:11px;padding:5px 12px;border-radius:100px;">✓ Confirmé</span></td>
            </tr>
          </table>
        </td></tr>

        <!-- Hero -->
        <tr><td style="padding:40px 36px 32px;text-align:center;">
          <div style="width:72px;height:72px;background:rgba(188,255,61,0.12);border:1px solid rgba(188,255,61,0.25);border-radius:24px;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;font-size:32px;">✓</div>
          <h1 style="margin:0 0 12px;font-size:28px;font-weight:800;color:#ffffff;">Rendez-vous <span style="color:#bcff3d;">confirmé !</span></h1>
          <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.6;">
            Bonjour <strong style="color:rgba(255,255,255,0.9);">${safeFirstName}</strong>, votre consultation automobile est bien réservée.<br>
            Votre conseiller vous contactera à l'heure choisie.
          </p>
        </td></tr>

        <!-- Recap -->
        <tr><td style="padding:0 36px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
            <tr><td style="background:rgba(188,255,61,0.06);padding:12px 20px;border-bottom:1px solid rgba(188,255,61,0.12);">
              <span style="font-size:10px;font-weight:600;color:rgba(188,255,61,0.65);letter-spacing:1.2px;text-transform:uppercase;">Récapitulatif de votre rendez-vous</span>
            </td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Date</div>
                  <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${dateLabel}</div>
                </td></tr>
                <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Heure &amp; durée</div>
                  <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${time} — ${durationMinutes} min</div>
                </td></tr>
                <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Format</div>
                  <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${formatStr}</div>
                </td></tr>
                <tr><td style="padding:16px 20px;">
                  <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Conseiller assigné</div>
                  <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">Julien DURANT</div>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Note annulation -->
        <tr><td style="padding:0 36px 32px;">
          <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.35);text-align:center;">
            Annulation gratuite jusqu'à 24h avant le rendez-vous.<br>
            <a href="${managementUrl.toString()}" style="display:inline-block;margin:14px 0 12px;padding:12px 18px;border-radius:12px;background:#bcff3d;color:#000;font-weight:700;text-decoration:none;">Gérer ou annuler mon rendez-vous</a><br>
            Contactez-nous : <a href="tel:+33670760719" style="color:#bcff3d;">06 70 76 07 19</a> · <a href="mailto:contact@vroomparis.fr" style="color:#bcff3d;">contact@vroomparis.fr</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#181818;padding:20px 36px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
          <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.2);">© 2026 Vroom Paris · 4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await sendTrackedEmail({
    type: "booking",
    template: "booking_confirmation",
    to: email,
    subject: `✅ Rendez-vous confirmé — ${dateLabel} à ${time}`,
    html,
    metadata: { bookingId, cancelToken, rescheduleToken, date, time, durationMinutes, format, firstName, lastName, email },
  });
}

export async function sendBookingNotificationToTeam(params: {
  date: string;
  time: string;
  durationMinutes: number;
  format: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budget: string;
  vehicleType: string;
  description: string;
}) {
  const { date, time, durationMinutes, format, firstName, lastName, email, phone, budget, vehicleType, description } = params;
  const dateLabel = formatDate(date);
  const formatStr = formatLabel(format);
  const icsContent = buildIcs({ date, time, durationMinutes, format, firstName, lastName, email, phone });
  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeBudget = escapeHtml(budget);
  const safeVehicleType = escapeHtml(vehicleType);
  const safeDescription = escapeHtml(description);

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

        <tr><td style="background:#181818;padding:20px 28px;">
          <span style="font-size:18px;font-weight:800;color:#ffffff;">Vroom<span style="color:#bcff3d;">Advisor</span></span>
          <span style="float:right;background:#bcff3d;color:#000;font-size:11px;font-weight:700;padding:4px 10px;border-radius:100px;">Nouveau RDV</span>
        </td></tr>

        <tr><td style="padding:28px;">
          <h2 style="margin:0 0 20px;font-size:20px;color:#111827;">📅 Nouveau rendez-vous — ${dateLabel} à ${time}</h2>

          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Client</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Nom :</strong> <span style="color:#111827;">${safeFirstName} ${safeLastName}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Email :</strong> <a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Tél :</strong> <a href="tel:${safePhone}" style="color:#2563eb;">${safePhone}</a></td></tr>
              </table>
            </td></tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Rendez-vous</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Date :</strong> <span style="color:#111827;">${dateLabel}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Heure :</strong> <span style="color:#111827;">${time} (${durationMinutes} min)</span></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Format :</strong> <span style="color:#111827;">${formatStr}</span></td></tr>
              </table>
            </td></tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Projet</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Budget :</strong> <span style="color:#111827;">${safeBudget}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Véhicule :</strong> <span style="color:#111827;">${safeVehicleType}</span></td></tr>
                ${description ? `<tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Notes :</strong> <span style="color:#111827;">${safeDescription}</span></td></tr>` : ""}
              </table>
            </td></tr>
          </table>

          <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">Le fichier .ics joint vous permet d'ajouter ce rendez-vous à votre agenda en un clic.</p>
        </td></tr>

        <tr><td style="background:#f9fafb;padding:16px 28px;border-top:1px solid #e5e7eb;text-align:center;">
          <p style="margin:0;font-size:11px;color:#9ca3af;">VroomAdvisor · contact@vroomparis.fr · 06 70 76 07 19</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await sendTrackedEmail({
    type: "booking",
    template: "booking_notification",
    to: TEAM_EMAIL,
    subject: `📅 Nouveau RDV — ${firstName} ${lastName} · ${dateLabel} ${time}`,
    html,
    attachments: [
      {
        filename: "rendez-vous-vroom.ics",
        content: Buffer.from(icsContent).toString("base64"),
      },
    ],
    metadata: { date, time, durationMinutes, format, firstName, lastName, email, phone, budget, vehicleType },
  });
}
