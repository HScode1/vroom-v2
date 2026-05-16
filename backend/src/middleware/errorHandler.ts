import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction): void {
  if (err instanceof ZodError) {
    res.status(400).json({
      error: "Données invalides",
      details: err.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
    });
    return;
  }

  if (err instanceof Error) {
    console.error(`[${req.method} ${req.path}]`, err.message);
    res.status(500).json({ error: "Erreur interne du serveur" });
    return;
  }

  res.status(500).json({ error: "Erreur interne du serveur" });
}
