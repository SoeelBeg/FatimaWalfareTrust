import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const MAX_GALLERY_IMAGES = 12;

// ---------------- PATH FIX ----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UPLOAD_DIR = path.join(__dirname, "uploads");
const DATA_FILE = path.join(__dirname, "data/gallery.json");

// ---------------- INIT ----------------
if (!fsSync.existsSync(UPLOAD_DIR)) {
  fsSync.mkdirSync(UPLOAD_DIR, { recursive: true });
}

if (!fsSync.existsSync(DATA_FILE)) {
  fsSync.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fsSync.writeFileSync(DATA_FILE, "[]");
}

// ---------------- STATIC ----------------
app.use("/uploads", express.static(UPLOAD_DIR));

// ---------------- HELPERS ----------------
const readData = async () => {
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw);
};

const writeData = async (data) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};

const getHash = async (filePath) => {
  const buffer = await fs.readFile(filePath);
  return crypto.createHash("sha256").update(buffer).digest("hex");
};

// ---------------- MULTER ----------------
const upload = multer({
  storage: multer.diskStorage({
    destination: UPLOAD_DIR,
    filename: (req, file, cb) => {
      const safe = file.originalname.replace(/[^a-zA-Z0-9.-]/g, "_")
        .toLowerCase();
      cb(null, `${Date.now()}-${safe}`);
    }
  }),
  limits: { fileSize: 500 * 1024 }
});

// ---------------- ADMIN CHECK ----------------
const adminCheck = (req, res, next) => {
  if (req.headers["x-admin-token"] === "ADMIN_LOGGED_IN") return next();
  return res.status(403).json({ error: "Unauthorized" });
};

// ---------------- LOGIN ----------------
app.post("/api/admin-login", (req, res) => {
  if (req.body.password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Wrong password" });
  }
  res.json({ token: "ADMIN_LOGGED_IN" });
});

// ---------------- UPLOAD ----------------
app.post("/api/upload", adminCheck, upload.single("image"), async (req, res) => {
  try {
    const data = await readData();

    if (data.length >= MAX_GALLERY_IMAGES) {
      await fs.unlink(req.file.path);
      return res.status(403).json({ error: "Gallery limit reached" });
    }

    const hash = await getHash(req.file.path);

    // ✅ STRONG DUPLICATE CHECK
    if (data.find(img => img.hash === hash)) {
      await fs.unlink(req.file.path);
      return res.status(409).json({ error: "Duplicate image not allowed" });
    }

    data.push({
      name: req.file.filename,
      hash,
      title: req.body.title || "",
      category: req.body.category || "",
      createdAt: new Date().toISOString()
    });

    await writeData(data);
    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});

// ---------------- GALLERY ----------------
app.get("/api/gallery", async (req, res) => {
  const data = await readData();

  res.json(
    data
      .slice(-10)
      .reverse()
      .map(img => ({
        name: img.name,              // 🔥 IMPORTANT
        src: `/uploads/${img.name}`,
        title: img.title,
        category: img.category,
        createdAt: img.createdAt
      }))
  );
});

// ---------------- DELETE (FIXED) ----------------
app.delete("/api/delete/:name", adminCheck, async (req, res) => {
  try {
    // 🔥 DECODE URL
    const filename = decodeURIComponent(req.params.name);

    const data = await readData();
    const updated = data.filter(img => img.name !== filename);

    if (updated.length === data.length) {
      return res.status(404).json({ error: "Image not found" });
    }

    await writeData(updated);

    const filePath = path.join(UPLOAD_DIR, filename);
    if (fsSync.existsSync(filePath)) {
      await fs.unlink(filePath);
    }

    res.json({ success: true });

  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ error: "Delete failed" });
  }
});


// ---------------- FRONTEND SERVE ----------------
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  if (req.path.startsWith("/api") || req.path.startsWith("/uploads")) return;
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ---------------- START ----------------
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
