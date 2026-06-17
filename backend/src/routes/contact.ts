import { Router } from "express";
import { store } from "../data/store.js";
import { ContactSchema } from "../schemas/index.js";
import { sendContactConfirmationToClient, sendContactNotificationToTeam } from "../services/email.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const data = ContactSchema.parse(req.body);
    const message = await store.contactMessages.create(data);
    const emailJobs = await Promise.allSettled([
      sendContactNotificationToTeam(data),
      sendContactConfirmationToClient({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        subject: data.subject,
      }),
    ]);

    emailJobs.forEach((job, index) => {
      if (job.status === "rejected") {
        const target = index === 0 ? "team" : "client";
        console.error(`Failed to send contact email to ${target}:`, job.reason);
      }
    });

    res.status(201).json({ id: message.id, message: "Message envoyé avec succès" });
  } catch (err) {
    next(err);
  }
});

export default router;
