import { Response, Request } from "express";
import { deleteCredential, getCredentialById, getCredentials } from "../repositories/userSavingsRepositories.js";
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

export async function getAllCredentials(req: Request, res: Response) {
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    let user = await authServices.getUserDataByToken(token);
    if(!user){
        throw 401
    }
    let credentials = await getCredentials(user.id);
    if(!credentials){
        throw 404
    }
    res.status(200).send(credentials);
}

export async function getCredential(req: Request, res: Response) {
    let credentialId = req.params.id;
    let CID = parseInt(credentialId);
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    let user = await authServices.getUserDataByToken(token);
    if(!user){
        throw 401
    }
    let credential = await getCredentialById(user.id, CID);
    if(!credential){
        throw 404
    }

    res.status(200).send(credential);
}

export async function deleteCredentialById(req: Request, res: Response) {
    let credentialId = req.params.id;
    let CID = parseInt(credentialId);
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    let user = await authServices.getUserDataByToken(token);
    if(!user){
        throw 401
    }
    let credential = await getCredentialById(user.id, CID);
    if(!credential){
        throw 404
    }
    await deleteCredential(CID);
    res.sendStatus(200);
}
