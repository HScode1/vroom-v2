import { Router } from "express";
import { store } from "../data/store.js";
import { requireAdmin } from "../middleware/auth.js";
import { BookingAvailabilitySchema, BookingCreateSchema, AppointmentStatusUpdateSchema } from "../schemas/index.js";

const router = Router();

router.get("/availability", (req, res, next) => {
  try {
    const { year, month } = BookingAvailabilitySchema.parse(req.query);
    res.json(store.appointments.getAvailability(year, month));
  } catch (err) {
    next(err);
  }
});

router.get("/", requireAdmin, (_req, res) => {
  res.json(store.appointments.findAll());
});

router.post("/", (req, res, next) => {
  try {
    const data = BookingCreateSchema.parse(req.body);
    const { date, time } = data.booking;
    const avail = store.appointments.getAvailability(
      Number(date.split("-")[0]),
      Number(date.split("-")[1])
    );
    const dayInfo = avail.dates.find((d) => d.day === Number(date.split("-")[2]));
    if (!dayInfo?.available || !dayInfo.slots.includes(time)) {
      res.status(409).json({ error: "Ce créneau n'est plus disponible." });
      return;
    }
    const appointment = store.appointments.create(data);
    // TODO: send confirmation email to customer + notification to team
    res.status(201).json({ id: appointment.id, message: "Rendez-vous confirmé" });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id/status", requireAdmin, (req, res, next) => {
  try {
    const { status } = AppointmentStatusUpdateSchema.parse(req.body);
    const appt = store.appointments.findById(req.params.id);
    if (!appt) { res.status(404).json({ error: "Rendez-vous introuvable" }); return; }
    Object.assign(appt, { status });
    res.json(appt);
  } catch (err) {
    next(err);
  }
});

export default router;
