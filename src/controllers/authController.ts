import { Response, Request } from "express";
import UserObject from "../repositories/authRepositories.js";
import { authServices } from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    let body: UserObject = req.body;
    res.sendStatus(201);
}