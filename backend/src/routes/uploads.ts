import { Router } from "express";
import multer from "multer";
import { requireAdmin } from "../middleware/auth.js";
import { supabase } from "../data/supabase.js";

const MAX_FILE_SIZE_MB = Number(process.env.MAX_FILE_SIZE_MB ?? 10);
const BUCKET = process.env.SUPABASE_STORAGE_BUCKET ?? "vehicles";

const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

const upload = multer({
  storage: multer.memoryStorage(),
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
  upload.array("files", 20)(req, res, async (err) => {
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

    try {
      const urls: string[] = [];
      for (const file of files) {
        const ext = file.originalname.split(".").pop()?.toLowerCase() ?? "jpg";
        const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        const { error } = await supabase.storage
          .from(BUCKET)
          .upload(path, file.buffer, { contentType: file.mimetype, upsert: false });

        if (error) throw error;

        const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
        urls.push(data.publicUrl);
      }
      res.json({ urls });
    } catch (uploadErr) {
      next(uploadErr);
    }
  });
});

export default router;
