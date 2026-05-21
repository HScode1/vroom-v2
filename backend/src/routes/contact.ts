import { Router } from "express";
import { store } from "../data/store.js";
import { ContactSchema } from "../schemas/index.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const data = ContactSchema.parse(req.body);
    const message = await store.contactMessages.create(data);
    res.status(201).json({ id: message.id, message: "Message envoyé avec succès" });
  } catch (err) {
    next(err);
  }
});

export default router;
