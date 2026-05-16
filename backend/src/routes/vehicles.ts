import { Router } from "express";
import { store } from "../data/store.js";
import { requireAdmin } from "../middleware/auth.js";
import { VehicleCreateSchema, VehicleUpdateSchema, VehicleFiltersSchema } from "../schemas/index.js";

const router = Router();

router.get("/", (req, res, next) => {
  try {
    const filters = VehicleFiltersSchema.parse(req.query);
    const result = store.vehicles.findAll(filters);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.get("/filters", (_req, res) => {
  res.json(store.vehicles.filters());
});

router.get("/:id", (req, res) => {
  const vehicle = store.vehicles.findById(req.params.id);
  if (!vehicle) { res.status(404).json({ error: "Véhicule introuvable" }); return; }
  res.json(vehicle);
});

router.post("/", requireAdmin, (req, res, next) => {
  try {
    const data = VehicleCreateSchema.parse(req.body);
    const vehicle = store.vehicles.create(data);
    res.status(201).json(vehicle);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", requireAdmin, (req, res, next) => {
  try {
    const data = VehicleUpdateSchema.parse(req.body);
    const vehicle = store.vehicles.update(req.params.id, data);
    if (!vehicle) { res.status(404).json({ error: "Véhicule introuvable" }); return; }
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", requireAdmin, (req, res) => {
  const deleted = store.vehicles.delete(req.params.id);
  if (!deleted) { res.status(404).json({ error: "Véhicule introuvable" }); return; }
  res.status(204).end();
});

export default router;
