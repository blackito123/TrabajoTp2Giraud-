import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db";
import { setupSwagger } from "./src/config/swagger";
import authRoutes from "./src/routes/auth.routes";
import gameRoutes from "./src/routes/game.routes";
import libraryRoutes from "./src/routes/library.routes";
import statsRoutes from "./src/routes/stats.routes";
import { errorHandler } from "./src/middlewares/errorHandler";
dotenv.config();
async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3e3;
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  await connectDB();
  setupSwagger(app);
  app.use("/api/auth", authRoutes);
  app.use("/api/games", gameRoutes);
  app.use("/api/library", libraryRoutes);
  app.use("/api/stats", statsRoutes);
  app.use(errorHandler);
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve("dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
  if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
    });
  } else if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
  
  return app;
}

const appPromise = startServer();

export default async function (req, res) {
  const app = await appPromise;
  app(req, res);
}