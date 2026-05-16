import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { requireAdmin } from "../middleware/auth.js";

const UPLOAD_DIR = process.env.UPLOAD_DIR ?? "./uploads";
const MAX_FILE_SIZE_MB = Number(process.env.MAX_FILE_SIZE_MB ?? 10);

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`);
  },
});

const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE_MB * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_MIME.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Type de fichier non autorisé: ${file.mimetype}. Formats acceptés: JPG, PNG, WebP, HEIC`));
    }
  },
});

const router = Router();

router.post("/images", requireAdmin, (req, res, next) => {
  upload.array("files", 20)(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        res.status(400).json({ error: `Fichier trop volumineux. Maximum ${MAX_FILE_SIZE_MB} Mo.` });
        return;
      }
      res.status(400).json({ error: err.message });
      return;
    }
    if (err) { next(err); return; }

    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      res.status(400).json({ error: "Aucun fichier reçu" });
      return;
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const urls = files.map((f) => `${baseUrl}/uploads/${f.filename}`);
    res.json({ urls });
  });
});

export default router;
