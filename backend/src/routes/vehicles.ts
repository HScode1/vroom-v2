import { Router } from "express";
import { store } from "../data/store.js";
import { requireAdmin } from "../middleware/auth.js";
import { VehicleCreateSchema, VehicleUpdateSchema, VehicleFiltersSchema } from "../schemas/index.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const filters = VehicleFiltersSchema.parse(req.query);
    const result = await store.vehicles.findAll(filters);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.get("/filters", async (_req, res, next) => {
  try {
    res.json(await store.vehicles.filters());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const vehicle = await store.vehicles.findById(req.params.id);
    if (!vehicle) { res.status(404).json({ error: "Véhicule introuvable" }); return; }
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
});

router.post("/", requireAdmin, async (req, res, next) => {
  try {
    const data = VehicleCreateSchema.parse(req.body);
    const vehicle = await store.vehicles.create(data);
    res.status(201).json(vehicle);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", requireAdmin, async (req, res, next) => {
  try {
    const data = VehicleUpdateSchema.parse(req.body);
    const vehicle = await store.vehicles.update(req.params.id, data);
    if (!vehicle) { res.status(404).json({ error: "Véhicule introuvable" }); return; }
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", requireAdmin, async (req, res, next) => {
  try {
    const deleted = await store.vehicles.delete(req.params.id);
    if (!deleted) { res.status(404).json({ error: "Véhicule introuvable" }); return; }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
