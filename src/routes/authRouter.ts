import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import { signupMiddleware } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", signupMiddleware, signUp);
authRouter.post("/sign-in");

export default authRouter;