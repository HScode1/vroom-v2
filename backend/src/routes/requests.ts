import { Router } from "express";
import rateLimit from "express-rate-limit";
import { store } from "../data/store.js";
import { requireAdmin } from "../middleware/auth.js";
import { BuyRequestSchema, SellRequestSchema, RequestStatusUpdateSchema } from "../schemas/index.js";
import {
  sendBuyRequestConfirmationToClient,
  sendBuyRequestNotificationToTeam,
  sendSellRequestConfirmationToClient,
  sendSellRequestNotificationToTeam,
} from "../services/email.js";

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Trop de requêtes. Veuillez réessayer dans 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

const router = Router();

// ── Buy requests ──────────────────────────────────────────────────────────────

router.get("/buy", requireAdmin, async (_req, res, next) => {
  try {
    res.json(await store.buyRequests.findAll());
  } catch (err) {
    next(err);
  }
});

router.post("/buy", formLimiter, async (req, res, next) => {
  try {
    const data = BuyRequestSchema.parse(req.body);
    const request = await store.buyRequests.create(data);
    const emails = await Promise.allSettled([
      sendBuyRequestNotificationToTeam({
        requestId: request.id,
        customer: request.customer,
        vehicleCriteria: request.vehicleCriteria,
      }),
      sendBuyRequestConfirmationToClient({
        requestId: request.id,
        customer: request.customer,
        vehicleCriteria: request.vehicleCriteria,
      }),
    ]);

    emails.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error("Failed to send buy request email", {
          requestId: request.id,
          recipient: index === 0 ? "team" : "client",
          error: result.reason,
        });
      }
    });

    res.status(201).json({ id: request.id, message: "Demande enregistrée" });
  } catch (err) {
    next(err);
  }
});

router.patch("/buy/:id/status", requireAdmin, async (req, res, next) => {
  try {
    const { status } = RequestStatusUpdateSchema.parse(req.body);
    const request = await store.buyRequests.updateStatus(req.params.id, status);
    if (!request) { res.status(404).json({ error: "Demande introuvable" }); return; }
    res.json(request);
  } catch (err) {
    next(err);
  }
});

// ── Sell requests ─────────────────────────────────────────────────────────────

router.get("/sell", requireAdmin, async (_req, res, next) => {
  try {
    res.json(await store.sellRequests.findAll());
  } catch (err) {
    next(err);
  }
});

router.get("/sell/:id", requireAdmin, async (req, res, next) => {
  try {
    const r = await store.sellRequests.findById(req.params.id);
    if (!r) { res.status(404).json({ error: "Dossier introuvable" }); return; }
    res.json(r);
  } catch (err) {
    next(err);
  }
});

router.post("/sell", formLimiter, async (req, res, next) => {
  try {
    const data = SellRequestSchema.parse(req.body);
    const request = await store.sellRequests.create(data);
    const emails = await Promise.allSettled([
      sendSellRequestNotificationToTeam({
        requestId: request.id,
        customer: request.customer,
        vehicle: request.vehicle,
      }),
      sendSellRequestConfirmationToClient({
        requestId: request.id,
        customer: request.customer,
        vehicle: request.vehicle,
      }),
    ]);

    emails.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error("Failed to send sell request email", {
          requestId: request.id,
          recipient: index === 0 ? "team" : "client",
          error: result.reason,
        });
      }
    });

    res.status(201).json({ id: request.id, message: "Dossier de reprise enregistré" });
  } catch (err) {
    next(err);
  }
});

router.patch("/sell/:id/status", requireAdmin, async (req, res, next) => {
  try {
    const { status } = RequestStatusUpdateSchema.parse(req.body);
    const request = await store.sellRequests.updateStatus(req.params.id, status);
    if (!request) { res.status(404).json({ error: "Dossier introuvable" }); return; }
    res.json(request);
  } catch (err) {
    next(err);
  }
});

export default router;
