import { Router } from "express";
import { store } from "../data/store.js";
import { requireAdmin } from "../middleware/auth.js";
import { BuyRequestSchema, SellRequestSchema, RequestStatusUpdateSchema } from "../schemas/index.js";

const router = Router();

// ── Buy requests ──────────────────────────────────────────────────────────────

router.get("/buy", requireAdmin, (_req, res) => {
  res.json(store.buyRequests.findAll());
});

router.post("/buy", (req, res, next) => {
  try {
    const data = BuyRequestSchema.parse(req.body);
    const request = store.buyRequests.create(data);
    // TODO: send confirmation email to customer + lead notification to team
    res.status(201).json({ id: request.id, message: "Demande enregistrée" });
  } catch (err) {
    next(err);
  }
});

router.patch("/buy/:id/status", requireAdmin, (req, res, next) => {
  try {
    const { status } = RequestStatusUpdateSchema.parse(req.body);
    const request = store.buyRequests.updateStatus(req.params.id, status);
    if (!request) { res.status(404).json({ error: "Demande introuvable" }); return; }
    res.json(request);
  } catch (err) {
    next(err);
  }
});

// ── Sell requests ─────────────────────────────────────────────────────────────

router.get("/sell", requireAdmin, (_req, res) => {
  res.json(store.sellRequests.findAll());
});

router.get("/sell/:id", requireAdmin, (req, res) => {
  const r = store.sellRequests.findById(req.params.id);
  if (!r) { res.status(404).json({ error: "Dossier introuvable" }); return; }
  res.json(r);
});

router.post("/sell", (req, res, next) => {
  try {
    const data = SellRequestSchema.parse(req.body);
    const request = store.sellRequests.create(data);
    // TODO: send confirmation email to customer + lead notification to team
    res.status(201).json({ id: request.id, message: "Dossier de reprise enregistré" });
  } catch (err) {
    next(err);
  }
});

router.patch("/sell/:id/status", requireAdmin, (req, res, next) => {
  try {
    const { status } = RequestStatusUpdateSchema.parse(req.body);
    const request = store.sellRequests.updateStatus(req.params.id, status);
    if (!request) { res.status(404).json({ error: "Dossier introuvable" }); return; }
    res.json(request);
  } catch (err) {
    next(err);
  }
});

export default router;
