import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import { errorHandler } from "./middleware/errorHandler.js";
import { requireAdmin, signAdminToken } from "./middleware/auth.js";
import { LoginSchema } from "./schemas/index.js";
import vehiclesRouter from "./routes/vehicles.js";
import bookingsRouter from "./routes/bookings.js";
import requestsRouter from "./routes/requests.js";
import uploadsRouter from "./routes/uploads.js";
import contactRouter from "./routes/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT ?? 3001);
const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:5173";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@vroomparis.fr";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Vroom2026!";

const app = express();

app.use(cors({
  origin: [FRONTEND_URL, "http://localhost:5173", "http://localhost:4173"],
  credentials: true,
}));

app.use(express.json({ limit: "1mb" }));

// Rate limiting on all public form endpoints
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { error: "Trop de requêtes. Veuillez réessayer dans 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Serve uploaded files
const uploadDir = path.resolve(process.env.UPLOAD_DIR ?? "./uploads");
app.use("/uploads", express.static(uploadDir));

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

// ── Admin convenience: rate limiting bypass marker ────────────────────────────
// POST /api/v1/bookings and /api/v1/requests are rate-limited at the route level
app.use("/api/v1/bookings", formLimiter);
app.use("/api/v1/requests", formLimiter);

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
