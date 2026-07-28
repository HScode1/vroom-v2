import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/errorHandler.js";
import { requireAdmin, signAdminToken } from "./middleware/auth.js";
import { LoginSchema } from "./schemas/index.js";
import vehiclesRouter from "./routes/vehicles.js";
import bookingsRouter from "./routes/bookings.js";
import requestsRouter from "./routes/requests.js";
import uploadsRouter from "./routes/uploads.js";
import contactRouter from "./routes/contact.js";

const PORT = Number(process.env.PORT ?? 3001);
const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:5173";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@vroomparis.fr";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Vroom2026!";

const app = express();

function normalizeOrigin(origin: string) {
  return origin.trim().replace(/\/+$/, "");
}

const configuredFrontendOrigins = FRONTEND_URL
  .split(",")
  .map(normalizeOrigin)
  .filter(Boolean);

const allowedOrigins = new Set([
  ...configuredFrontendOrigins,
  "http://localhost:5173",
  "http://localhost:4173",
  "https://vroomadvisor.fr",
  "https://www.vroomadvisor.fr",
  "https://boisterous-unicorn-aab3a7.netlify.app",
]);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.has(normalizeOrigin(origin))) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: origin not allowed — ${origin}`));
    }
  },
  credentials: true,
}));

app.use(express.json({ limit: "1mb" }));

// ── Disable browser caching globally ──────────────────────────────────────────
app.use((_req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  next();
});

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Trop de requêtes. Veuillez réessayer dans 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Auth ──────────────────────────────────────────────────────────────────────
app.post("/api/v1/auth/login", (req, res, next) => {
  try {
    const { email, password } = LoginSchema.parse(req.body);
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      res.status(401).json({ error: "Email ou mot de passe incorrect" });
      return;
    }
    const token = signAdminToken();
    res.json({ token, expiresIn: "8h" });
  } catch (err) {
    next(err);
  }
});

app.get("/api/v1/auth/me", requireAdmin, (_req, res) => {
  res.json({ email: ADMIN_EMAIL, role: "admin" });
});

// ── Public API ────────────────────────────────────────────────────────────────
app.use("/api/v1/vehicles", vehiclesRouter);
app.use("/api/v1/bookings", bookingsRouter);
app.use("/api/v1/requests", requestsRouter);
app.use("/api/v1/contact", formLimiter, contactRouter);
app.use("/api/v1/uploads", uploadsRouter);

// ── Health check ──────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 VroomAdvisor API running on http://localhost:${PORT}`);
  console.log(`   Frontend: ${FRONTEND_URL}`);
});

export default app;
