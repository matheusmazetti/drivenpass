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
