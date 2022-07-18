import { Router } from "express";
import { login, signUp } from "../controllers/authController.js";
import { loginMIddleware, signupMiddleware } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", signupMiddleware, signUp);
authRouter.post("/sign-in", loginMIddleware, login);

export default authRouter;