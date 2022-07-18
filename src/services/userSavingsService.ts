import dotenv from 'dotenv';
import pkg from 'cryptr';
const { Cryptr } = pkg;
import { insertCredentials } from '../repositories/userSavingsRepositories.js';

dotenv.config();

async function createCredential(data) {
    let cryptr = new Cryptr(process.env.CRYPTR_SECRET)
    let newPassword = cryptr.encrypt(data.password);
    data.password = newPassword;
    await insertCredentials(data);
}

async function createCard(data) {
    let cryptr = new Cryptr(process.env.CRYPTR_SECRET)
    let newCvv = cryptr.encrypt(data.cvv);
    data.cvv = newCvv;
    await insertCredentials(data);
}

async function createWifi(data) {
    let cryptr = new Cryptr(process.env.CRYPTR_SECRET)
    let newPassword = cryptr.encrypt(data.password);
    data.password = newPassword;
    await insertCredentials(data);
}

export const userSavingsServices = {
    createCredential,
    createCard,
    createWifi
};

