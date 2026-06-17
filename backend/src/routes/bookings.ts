import { Router, type Request, type Response } from "express";
import { store } from "../data/store.js";
import { requireAdmin } from "../middleware/auth.js";
import { BookingAvailabilitySchema, BookingCreateSchema, BookingRescheduleSchema, AppointmentStatusUpdateSchema } from "../schemas/index.js";
import { sendBookingConfirmationToClient, sendBookingNotificationToTeam } from "../services/email.js";
import { createGoogleCalendarEvent, deleteGoogleCalendarEvent, updateGoogleCalendarEvent } from "../services/calendar.js";

const router = Router();

type BookingAppointment = Awaited<ReturnType<typeof store.appointments.create>>;

function isOverlapConflict(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const code = (error as { code?: string }).code;
  const message = (error as { message?: string }).message ?? "";
  return code === "23P01" || message.includes("appointments_no_active_overlap");
}

function getTokenFromRequest(req: Pick<Request, "body" | "query">) {
  const body = req.body as Record<string, unknown> | undefined;
  const query = req.query as Record<string, unknown> | undefined;
  const token = body?.token ?? query?.token;
  return typeof token === "string" && token.trim() ? token.trim() : null;
}

function buildEmailParams(appointment: BookingAppointment) {
  return {
    bookingId: appointment.id,
    cancelToken: appointment.cancelToken,
    rescheduleToken: appointment.rescheduleToken,
    date: appointment.booking.date,
    time: appointment.booking.time,
    durationMinutes: appointment.booking.duration,
    format: appointment.booking.format,
    firstName: appointment.customer.firstName,
    lastName: appointment.customer.lastName,
    email: appointment.customer.email,
    phone: appointment.customer.phone,
  };
}

async function syncCalendar(appointment: BookingAppointment) {
  if (appointment.calendarEventId) {
    const updatedEventId = await updateGoogleCalendarEvent(appointment);
    if (!updatedEventId) {
      console.error("Google Calendar update failed after booking mutation", { appointmentId: appointment.id });
    }
    return;
  }

  const calendarEventId = await createGoogleCalendarEvent(appointment);
  if (!calendarEventId) return;

  const updated = await store.appointments.update(appointment.id, { calendarEventId });
  if (!updated) {
    console.error("Failed to persist Google Calendar event id", { appointmentId: appointment.id, calendarEventId });
  }
}

async function sendBookingEmails(appointment: BookingAppointment) {
  const emailParams = buildEmailParams(appointment);

  await Promise.allSettled([
    sendBookingConfirmationToClient(emailParams),
    sendBookingNotificationToTeam({
      ...emailParams,
      budget: appointment.project.budget,
      vehicleType: appointment.project.vehicleType,
      description: appointment.project.description,
    }),
  ]);
}

async function createAppointment(data: Parameters<typeof store.appointments.create>[0]) {
  const { date, time } = data.booking;
  const avail = await store.appointments.getAvailability(Number(date.split("-")[0]), Number(date.split("-")[1]));
  const dayInfo = avail.dates.find((d) => d.day === Number(date.split("-")[2]));
  if (!dayInfo?.available || !dayInfo.slots.includes(time)) {
    return { error: "Ce créneau n'est plus disponible." } as const;
  }

  try {
    const appointment = await store.appointments.create(data);
    await syncCalendar(appointment);
    await sendBookingEmails(appointment);
    return { appointment } as const;
  } catch (error) {
    if (isOverlapConflict(error)) {
      return { error: "Ce créneau n'est plus disponible." } as const;
    }
    throw error;
  }
}

router.get("/availability", async (req, res, next) => {
  try {
    const { year, month } = BookingAvailabilitySchema.parse(req.query);
    res.json(await store.appointments.getAvailability(year, month));
  } catch (err) {
    next(err);
  }
});

router.get("/", requireAdmin, async (_req, res, next) => {
  try {
    res.json(await store.appointments.findAll());
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = BookingCreateSchema.parse(req.body);
    const result = await createAppointment(data);

    if ("error" in result) {
      res.status(409).json({ error: result.error });
      return;
    }

    res.status(201).json({
      id: result.appointment.id,
      cancelToken: result.appointment.cancelToken,
      rescheduleToken: result.appointment.rescheduleToken,
      message: "Rendez-vous confirmé",
    });
  } catch (err) {
    next(err);
  }
});

router.post("/:id/reschedule", async (req, res, next) => {
  try {
    const data = BookingRescheduleSchema.parse(req.body);
    const existing = await store.appointments.findById(req.params.id);
    if (!existing) {
      res.status(404).json({ error: "Rendez-vous introuvable" });
      return;
    }
    if (existing.rescheduleToken !== data.token) {
      res.status(403).json({ error: "Jeton de reprogrammation invalide" });
      return;
    }
    if (existing.status === "Annulé") {
      res.status(409).json({ error: "Ce rendez-vous a déjà été annulé." });
      return;
    }

    const sameSlot =
      existing.booking.date === data.booking.date &&
      existing.booking.time === data.booking.time &&
      existing.booking.duration === data.booking.duration &&
      existing.booking.format === data.booking.format;

    if (!sameSlot) {
      const avail = await store.appointments.getAvailability(Number(data.booking.date.split("-")[0]), Number(data.booking.date.split("-")[1]));
      const dayInfo = avail.dates.find((d) => d.day === Number(data.booking.date.split("-")[2]));
      if (!dayInfo?.available || !dayInfo.slots.includes(data.booking.time)) {
        res.status(409).json({ error: "Ce créneau n'est plus disponible." });
        return;
      }
    }

    const updated = await store.appointments.update(existing.id, {
      booking: data.booking,
      customer: data.customer,
      project: data.project,
    });
    if (!updated) {
      res.status(500).json({ error: "Impossible de reprogrammer le rendez-vous" });
      return;
    }

    if (updated.calendarEventId) {
      await updateGoogleCalendarEvent(updated);
    } else {
      await syncCalendar(updated);
    }
    await sendBookingEmails(updated);
    res.json({
      id: updated.id,
      cancelToken: updated.cancelToken,
      rescheduleToken: updated.rescheduleToken,
      message: "Rendez-vous reprogrammé",
    });
  } catch (err) {
    next(err);
  }
});

async function cancelAppointment(req: Pick<Request, "params" | "body" | "query">, res: Response) {
  const token = getTokenFromRequest(req);
  if (!token) {
    res.status(400).json({ error: "Jeton d'annulation manquant" });
    return;
  }

  const appointment = await store.appointments.findById(req.params.id);
  if (!appointment) {
    res.status(404).json({ error: "Rendez-vous introuvable" });
    return;
  }
  if (appointment.cancelToken !== token) {
    res.status(403).json({ error: "Jeton d'annulation invalide" });
    return;
  }

  const updated = await store.appointments.update(req.params.id, { status: "Annulé" });
  if (!updated) {
    res.status(500).json({ error: "Impossible d'annuler le rendez-vous" });
    return;
  }

  await deleteGoogleCalendarEvent(appointment);
  await store.appointments.update(req.params.id, { calendarEventId: null });
  res.json({ id: updated.id, message: "Rendez-vous annulé" });
}

router.post("/:id/cancel", async (req, res, next) => {
  try {
    await cancelAppointment(req, res);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/cancel", async (req, res, next) => {
  try {
    await cancelAppointment(req, res);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id/status", requireAdmin, async (req, res, next) => {
  try {
    const { status } = AppointmentStatusUpdateSchema.parse(req.body);
    const updated = await store.appointments.updateStatus(req.params.id, status);
    if (!updated) { res.status(404).json({ error: "Rendez-vous introuvable" }); return; }
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

export default router;
