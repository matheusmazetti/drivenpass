import { Response, Request } from "express";
import UserObject from "../repositories/authRepositories.js";
import { authServices } from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    let body: UserObject = req.body;
    await authServices.insertUserWithNewData(body);
    res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
    let body: UserObject = req.body;
    await authServices.login(body);
    res.sendStatus(200);
}