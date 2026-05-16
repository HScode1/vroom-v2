import { Router } from "express";
import { store } from "../data/store.js";
import { ContactSchema } from "../schemas/index.js";

const router = Router();

router.post("/", (req, res, next) => {
  try {
    const data = ContactSchema.parse(req.body);
    const message = store.contactMessages.create(data);
    // TODO: send email to team with message content
    res.status(201).json({ id: message.id, message: "Message envoyé avec succès" });
  } catch (err) {
    next(err);
  }
});

export default router;
