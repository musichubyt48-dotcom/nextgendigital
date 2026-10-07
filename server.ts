import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { handleContactSubmission, handleProjectSubmission } from "./server/sheetsBackend.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === "production";

  // Parse incoming JSON & urlencoded bodies
  app.use(express.json({ limit: "2mb" }));
  app.use(express.urlencoded({ extended: true, limit: "2mb" }));

  // ============================================================================
  // SECURE SERVER-SIDE FORM SUBMISSION API ROUTES
  // The frontend calls ONLY these endpoints.
  // ============================================================================

  // FORM 1: "Send Us a Message"
  app.post("/api/contact", async (req, res) => {
    try {
      const result = await handleContactSubmission(req.body);
      res.status(result.status || (result.success ? 200 : 400)).json({
        success: result.success,
        message: result.message,
      });
    } catch (err: unknown) {
      const error = err as Error;
      console.error("[API] Error in /api/contact:", error.message);
      res.status(500).json({
        success: false,
        message: "An internal server error occurred while processing your request.",
      });
    }
  });

  // FORM 2: "Start a Project"
  app.post("/api/start-project", async (req, res) => {
    try {
      const result = await handleProjectSubmission(req.body);
      res.status(result.status || (result.success ? 200 : 400)).json({
        success: result.success,
        message: result.message,
      });
    } catch (err: unknown) {
      const error = err as Error;
      console.error("[API] Error in /api/start-project:", error.message);
      res.status(500).json({
        success: false,
        message: "An internal server error occurred while processing your project brief.",
      });
    }
  });

  // API Health check
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      uptime: process.uptime(),
      service: "NextGen Digital Form Backend",
      timestamp: new Date().toISOString(),
    });
  });

  // ============================================================================
  // FRONTEND INTEGRATION (Vite Middleware in dev / Static files in production)
  // ============================================================================
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (_req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    } else {
      console.warn("Dist folder not found. Please run 'npm run build' first.");
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `Server listening on http://0.0.0.0:${PORT} [${isProd ? "production" : "development"}]`,
    );
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
