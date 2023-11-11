import express from "express";
import messagesRouter from "./messagesRoutes";
import authRouter from "./authRoutes";

const appRouter = express.Router();
appRouter.use("/messages", messagesRouter).use("/auth", authRouter);

export default appRouter;
