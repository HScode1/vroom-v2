import { Router, type NextFunction, type Response } from "express";
import multer from "multer";
import rateLimit from "express-rate-limit";
import { requireAdmin } from "../middleware/auth.js";
import { supabase } from "../data/supabase.js";

const MAX_FILE_SIZE_MB = Number(process.env.MAX_FILE_SIZE_MB ?? 10);
const BUCKET = process.env.SUPABASE_STORAGE_BUCKET ?? "vehicles";

const ADMIN_ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];
const PUBLIC_ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp"];

const publicUploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: "Trop de requêtes. Veuillez réessayer dans 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

function createUploadMiddleware(allowedMimeTypes: string[]) {
  return multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: MAX_FILE_SIZE_MB * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error(`Type de fichier non autorisé: ${file.mimetype}. Formats acceptés: JPG, PNG, WebP`));
      }
    },
  });
}

const adminUpload = createUploadMiddleware(ADMIN_ALLOWED_MIME);
const publicUpload = createUploadMiddleware(PUBLIC_ALLOWED_MIME);

function buildStoragePath(prefix: string, file: Express.Multer.File) {
  const ext = file.originalname.split(".").pop()?.toLowerCase() ?? "jpg";
  const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  return prefix ? `${prefix}${uniqueName}` : uniqueName;
}

async function uploadFiles(
  files: Express.Multer.File[],
  prefix: string,
) {
  const urls: string[] = [];

  for (const file of files) {
    const path = buildStoragePath(prefix, file);

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(path, file.buffer, { contentType: file.mimetype, upsert: false });

    if (error) throw error;

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    urls.push(data.publicUrl);
  }

  return urls;
}

function handleUploadError(err: unknown, res: Response, next: NextFunction) {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      res.status(400).json({ error: `Fichier trop volumineux. Maximum ${MAX_FILE_SIZE_MB} Mo.` });
      return true;
    }
    res.status(400).json({ error: err.message });
    return true;
  }

  if (err instanceof Error) {
    res.status(400).json({ error: err.message });
    return true;
  }

  next(err);
  return false;
}

const router = Router();

router.post("/images", requireAdmin, (req, res, next) => {
  adminUpload.array("files", 20)(req, res, async (err) => {
    if (handleUploadError(err, res, next)) return;

    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      res.status(400).json({ error: "Aucun fichier reçu" });
      return;
    }

    try {
      const urls = await uploadFiles(files, "");
      res.json({ urls });
    } catch (uploadErr) {
      next(uploadErr);
    }
  });
});

router.post("/sell-images", publicUploadLimiter, (req, res, next) => {
  publicUpload.array("files", 10)(req, res, async (err) => {
    if (handleUploadError(err, res, next)) return;

    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      res.status(400).json({ error: "Aucun fichier reçu" });
      return;
    }

    try {
      const urls = await uploadFiles(files, "sell-requests/");
      res.json({ urls });
    } catch (uploadErr) {
      next(uploadErr);
    }
  });
});

export default router;
