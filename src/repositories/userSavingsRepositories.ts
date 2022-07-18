import { Cards, Credentials, Notes, Wifi } from "@prisma/client";
import { prisma } from "../database.js";

export async function checkTitleInCredentials(userId: number, title: string) {
    let data = await prisma.credentials.findFirst({
        where: {
            userId: userId,
            title: title
        }
    });
    return data;
}

export async function checkTitleInNotes(userId: number, title: string) {
    let data = await prisma.notes.findFirst({
        where: {
            userId: userId,
            title: title
        }
    });
    return data;
}

export async function checkTitleInCards(userId: number, title: string) {
    let data = await prisma.cards.findFirst({
        where: {
            userId: userId,
            title: title
        }
    });
    return data;
}

export async function checkTitleInWifi(userId: number, title: string) {
    let data = await prisma.wifi.findFirst({
        where: {
            userId: userId,
            title: title
        }
    });
    return data;
}

export async function insertCredentials(Data: Credentials) {
    await prisma.credentials.create({
        data: Data
    });
}

export async function insertNotes(Data: Notes) {
    await prisma.notes.create({
        data: Data
    });
}

export async function insertCard(Data: Cards) {
    await prisma.cards.create({
        data: Data
    });
}

export async function insertWifi(Data: Wifi) {
    await prisma.wifi.create({
        data: Data
    });
}

export async function getCredentials(userId: number){
    let credentials = await prisma.credentials.findMany({
        where: {
            userId: userId
        }
    });

    return credentials;
}

export async function getNotes(userId: number){
    let Notes = await prisma.notes.findMany({
        where: {
            userId: userId
        }
    });

    return Notes;
}

export async function getCards(userId: number){
    let Cards = await prisma.cards.findMany({
        where: {
            userId: userId
        }
    });

    return Cards;
}

export async function getWifis(userId: number){
    let wifi = await prisma.wifi.findMany({
        where: {
            userId: userId
        }
    });

    return wifi;
}

export async function getCredentialById(userId: number, credentialId: number) {
    let credential = await prisma.credentials.findFirst({
        where:{
            userId: userId,
            id: credentialId
        }
    });

    return credential;
}

export async function getNotesById(userId: number, NoteId: number) {
    let Notes = await prisma.notes.findFirst({
        where:{
            userId: userId,
            id: NoteId
        }
    });

    return Notes;
}

export async function getCardById(userId: number, cardId: number) {
    let card = await prisma.cards.findFirst({
        where:{
            userId: userId,
            id: cardId
        }
    });

    return card;
}

export async function getWifiById(userId: number, WifiId: number) {
    let Wifi = await prisma.wifi.findFirst({
        where:{
            userId: userId,
            id: WifiId
        }
    });

    return Wifi;
}

export async function deleteCredential(credentialId: number) {
    await prisma.credentials.delete({
        where: {
            id: credentialId,
        }
    })
}

export async function deleteNote(NoteId: number) {
    await prisma.notes.delete({
        where: {
            id: NoteId,
        }
    })
}

export async function deleteCard(CardId: number) {
    await prisma.cards.delete({
        where: {
            id: CardId,
        }
    })
}

export async function deleteWifi(WifiId: number) {
    await prisma.wifi.delete({
        where: {
            id: WifiId,
        }
    })
}



