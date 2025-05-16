import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not defined in environment variables");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Import API routes
import sendOTP from "../api/send-otp.js";
import verifyOTP from "../api/verify-otp.js";

// API routes
app.post("/api/send-otp", (req: Request, res: Response) => {
  sendOTP(req as any, res as any);
});

app.post("/api/verify-otp", (req: Request, res: Response) => {
  verifyOTP(req as any, res as any);
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
