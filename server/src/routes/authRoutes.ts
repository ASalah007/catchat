import express from "express";
import * as authController from "../controllers/authController";

const authRouter = express.Router();

authRouter.route("/signup").post(authController.signup);
authRouter.route("/login").post(authController.login);

export default authRouter;
