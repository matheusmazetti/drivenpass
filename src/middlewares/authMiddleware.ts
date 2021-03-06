import { Request, Response, NextFunction } from "express";
import UserObject from "../repositories/authRepositories.js";
import { authSchema } from "../schemas/authSchemas.js";
import { authServices } from "../services/authService.js";

export async function signupMiddleware(req: Request, res: Response, next: NextFunction) {
    let body: UserObject = req.body;
    let { error } = authSchema.validate(body);
    if(error){
        throw {type: 422, message: "objeto não corresponde a documentação"}
    }

    let emailCheck = await authServices.emailExists(body.email);
    if(emailCheck){
        throw {type: 409, message: "email já cadastrado"}
    }

    next();
}

export async function loginMIddleware(req: Request, res: Response, next: NextFunction) {
    let body: UserObject = req.body;
    let { error } = authSchema.validate(body);
    if(error){
        throw 422;
    }

    next();
}

export async function checkToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    if(!token){
        throw 401;
    }
    next();
}