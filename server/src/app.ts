import express, { Express } from "express";
import appRouter from "./routes/appRoutes";
import cors from "cors";

export default function createApp(): Express {
  const app = express();

  app
    .use(express.json())
    .use(appRouter)
    .use(cors({ origin: "127.0.0.1:3000" }));
  return app;
}
