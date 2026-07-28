import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction): void {
  const isDev = process.env.NODE_ENV !== "production";

  if (err instanceof ZodError) {
    res.status(400).json({
      error: "Données invalides",
      details: err.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
    });
    return;
  }

  if (err instanceof Error) {
    console.error(`[${req.method} ${req.path}]`, err.message);
    res.status(500).json({
      error: "Erreur interne du serveur",
      ...(isDev ? { details: err.message } : {}),
    });
    return;
  }

  if (err && typeof err === "object") {
    const message = "message" in err && typeof err.message === "string" ? err.message : "Erreur interne du serveur";
    const details = "details" in err && typeof err.details === "string" ? err.details : undefined;
    const code = "code" in err && typeof err.code === "string" ? err.code : undefined;

    console.error(`[${req.method} ${req.path}]`, { message, details, code, err });
    res.status(500).json({
      error: "Erreur interne du serveur",
      ...(isDev ? { details: [code, message, details].filter(Boolean).join(" | ") } : {}),
    });
    return;
  }

  console.error(`[${req.method} ${req.path}]`, err);
  res.status(500).json({ error: "Erreur interne du serveur" });
}
