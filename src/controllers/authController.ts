import { Response, Request } from "express";
import { authServices } from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    let body: Object = req.body;
    await authServices.emailExists(body.email);
    await authServices.insertUser(body);
    res.sendStatus(201);
}