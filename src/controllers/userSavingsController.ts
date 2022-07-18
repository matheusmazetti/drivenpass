import { Response, Request } from "express";
import { credentialsSchema } from "../schemas/userSavingsSchemas.js";
import { authServices } from "../services/authService.js";
import { userSavingsServices } from "../services/userSavingsService.js";

export async function createNewCredential(req: Request, res: Response) {
    let credentialData = req.body;
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    let { error } = credentialsSchema.validate(credentialData);
    if(error){
        throw 422
    }
    let user = await authServices.getUserDataByToken(token);
    if(!user){
        throw 401
    }
    let newData = {...credentialData, userId: user.id}
    await userSavingsServices.createCredential(newData);
    res.sendStatus(201);
}