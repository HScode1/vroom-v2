import { Router } from "express";
import { store } from "../data/store.js";
import { requireAdmin } from "../middleware/auth.js";
import { BookingAvailabilitySchema, BookingCreateSchema, AppointmentStatusUpdateSchema } from "../schemas/index.js";
import { sendBookingConfirmationToClient, sendBookingNotificationToTeam } from "../services/email.js";

const router = Router();

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
    const { date, time } = data.booking;
    const avail = await store.appointments.getAvailability(
      Number(date.split("-")[0]),
      Number(date.split("-")[1])
    );
    const dayInfo = avail.dates.find((d) => d.day === Number(date.split("-")[2]));
    if (!dayInfo?.available || !dayInfo.slots.includes(time)) {
      res.status(409).json({ error: "Ce créneau n'est plus disponible." });
      return;
    }
    const appointment = await store.appointments.create(data);

    const emailParams = {
      date: data.booking.date,
      time: data.booking.time,
      durationMinutes: data.booking.duration,
      format: data.booking.format,
      firstName: data.customer.firstName,
      lastName: data.customer.lastName,
      email: data.customer.email,
      phone: data.customer.phone,
    };

    await Promise.allSettled([
      sendBookingConfirmationToClient(emailParams),
      sendBookingNotificationToTeam({
        ...emailParams,
        budget: data.project.budget,
        vehicleType: data.project.vehicleType,
        description: data.project.description,
      }),
    ]);

    res.status(201).json({ id: appointment.id, message: "Rendez-vous confirmé" });
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
