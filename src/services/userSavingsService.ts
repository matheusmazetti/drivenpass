import dotenv from 'dotenv';
import { checkTitleInCards, checkTitleInCredentials, checkTitleInWifi, insertCard, insertCredentials, insertWifi } from '../repositories/userSavingsRepositories.js';

dotenv.config();

async function createCredential(data) {
    let verify = await checkTitleInCredentials(data.userId, data.title);
    if(verify){
        throw 409
    }
    await insertCredentials(data);
}

async function createCard(data) {
    //let cryptr = new Cryptr(process.env.CRYPTR_SECRET)
    //let newCvv = cryptr.encrypt(data.cvv);
    //data.cvv = newCvv;
    let verify = await checkTitleInCards(data.userId, data.title);
    if(verify){
        throw 409
    }
    await insertCard(data);
}

async function createWifi(data) {
    //let cryptr = new Cryptr(process.env.CRYPTR_SECRET)
    //let newPassword = cryptr.encrypt(data.password);
    //data.password = newPassword;
    let verify = await checkTitleInWifi(data.userId, data.title);
    if(verify){
        throw 409
    }
    await insertWifi(data);
}

export const userSavingsServices = {
    createCredential,
    createCard,
    createWifi
};

