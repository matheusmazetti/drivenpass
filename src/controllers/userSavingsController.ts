import { Response, Request } from "express";
import { deleteCard, deleteCredential, getCardById, getCards, getCredentialById, getCredentials } from "../repositories/userSavingsRepositories.js";
import { cardSchema, credentialsSchema } from "../schemas/userSavingsSchemas.js";
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

export async function createNewCard(req: Request, res: Response) {
    let CardData = req.body;
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    let { error } = cardSchema.validate(CardData);
    if(error){
        throw 422
    }
    let user = await authServices.getUserDataByToken(token);
    if(!user){
        throw 401
    }
    let newData = {...CardData, userId: user.id}
    await userSavingsServices.createCard(newData);
    res.sendStatus(201);
}

export async function getAllCards(req: Request, res: Response) {
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    let user = await authServices.getUserDataByToken(token);
    if(!user){
        throw 401
    }
    let Cards = await getCards(user.id);
    if(!Cards){
        throw 404
    }
    res.status(200).send(Cards);
}

export async function getCard(req: Request, res: Response) {
    let CardId = req.params.id;
    let CID = parseInt(CardId);
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    let user = await authServices.getUserDataByToken(token);
    if(!user){
        throw 401
    }
    let Card = await getCardById(user.id, CID);
    if(!Card){
        throw 404
    }

    res.status(200).send(Card);
}

export async function deleteCardById(req: Request, res: Response) {
    let CardId = req.params.id;
    let CID = parseInt(CardId);
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    let user = await authServices.getUserDataByToken(token);
    if(!user){
        throw 401
    }
    let Card = await getCardById(user.id, CID);
    if(!Card){
        throw 404
    }
    await deleteCard(CID);
    res.sendStatus(200);
}
