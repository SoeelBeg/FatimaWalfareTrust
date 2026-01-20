import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import crypto from "crypto";


// import { createRequire } from "module";

dotenv.config();

const app = express();
app.use(cors({
   origin: true,   // later domain specify kar sakte ho
  credentials: true
}));
app.use(express.json());


const MAX_GALLERY_IMAGES = 20;


// ----------------------
// Paths (ES module fix)
// ----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// safe guard || Windows server me pehli baar deploy par helpful
const UPLOAD_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Static folders
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Data file
const DATA_FILE = path.join(__dirname, "data/gallery.json");
if (!fs.existsSync(DATA_FILE)) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

const imageFileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only image files (jpg, png, webp) are allowed"),
      false
    );
  }
};

const getFileHash = (filePath) => {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(buffer).digest("hex");
};

// Multer config
const upload = multer({
  storage: multer.diskStorage({
    destination: UPLOAD_DIR,
    filename: (req, file, cb) => {
      const now = new Date();

      const date = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).replace(/\//g, "-");

      const time = now
        .toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        .replace(/:/g, "-");

      const safeName = file.originalname
        .toLowerCase()
        .replace(/\s+/g, "-");

      cb(null, `${date}_${time}-${safeName}`);
    },
  }),
  fileFilter: imageFileFilter,   // 👈 IMPORTANT
  limits: {
    fileSize: 500 * 1024,
  },
});



// Admin middleware
const adminCheck = (req, res, next) => {
  if (req.headers["x-admin-token"] === "ADMIN_LOGGED_IN") next();
  else res.status(403).json({ error: "Unauthorized" });
};


app.post("/api/admin-login", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Password required" });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Wrong password" });
  }

  res.json({ token: "ADMIN_LOGGED_IN" });
});


//--------- API ROUTES------------------------

// Upload (admin)
app.post("/api/upload", adminCheck, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  let data = [];
  try {
    data = JSON.parse(fs.readFileSync(DATA_FILE));
  } catch {
    data = [];
  }

  // 🔒 IMAGE LIMIT CHECK
  if (data.length >= MAX_GALLERY_IMAGES) {
    fs.unlinkSync(req.file.path); // uploaded image delete
    return res.status(403).json({
      error: `Maximum ${MAX_GALLERY_IMAGES} images allowed in gallery`,
    });
  }

  // 🔒 Duplicate image check
  const newHash = getFileHash(req.file.path);

  const isDuplicate = data.some((img) => {
    const existingPath = path.join(UPLOAD_DIR, img.name);
    if (!fs.existsSync(existingPath)) return false;

    const existingHash = getFileHash(existingPath);
    return existingHash === newHash;
  });

  if (isDuplicate) {
    fs.unlinkSync(req.file.path); // uploaded file delete
    return res.status(409).json({
      error: "This image already exists",
    });
  }

  data.push({
    name: req.file.filename,
    title: req.body.title,
    category: req.body.category,
    createdAt: new Date().toISOString(),
  });

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  res.json({ success: true });
});


// Get gallery (public)
app.get("/api/gallery", (req, res) => {
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync(DATA_FILE));
  } catch {
    data = [];
  }

  const last10 = data.slice(-10).reverse();

  res.json(
    last10.map(img => ({
      name: img.name,
      src: `/uploads/${img.name}`,
      title: img.title,
      category: img.category,
      createdAt: img.createdAt,
    }))
  );
});


// Delete (admin)
app.delete("/api/delete/:name", adminCheck, (req, res) => {
  const filename = req.params.name;

  let data = JSON.parse(fs.readFileSync(DATA_FILE));
  data = data.filter((img) => img.name !== filename);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  const filePath = path.join(__dirname, "uploads", filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  res.json({ success: true });
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        error: "Image too large. Max size is 500KB",
      });
    }
  }

  if (err.message?.includes("Only image files")) {
    return res.status(400).json({ error: err.message });
  }

  res.status(500).json({ error: err.message || "Server error" });
});

// ======================
// FRONTEND (React build)
// ======================
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// React SPA fallback (SAFE)
app.use((req, res, next) => {
  if (req.method !== "GET") return next();

  // API & uploads ko block karo
  if (req.path.startsWith("/api") || req.path.startsWith("/uploads")) {
    return next();
  }

  res.sendFile(path.join(frontendPath, "index.html"));
});


// ======================
// START SERVER (LAST)
// ======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

