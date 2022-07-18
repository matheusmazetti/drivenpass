import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UserObject, { getUsersByEmail, insertUser } from "../repositories/authRepositories.js";

dotenv.config();

async function emailExists(email: string) {
    let result = await getUsersByEmail(email);
    return result;
}

async function insertUserWithNewData(userObj: UserObject) {
    let newPassword = bcrypt.hashSync(userObj.password, 10);
    let newUserObj = {
        email: userObj.email,
        password: newPassword
    };
    await insertUser(newUserObj);    
}

async function login(userData: UserObject) {
    let userDB = await getUsersByEmail(userData.email);
    if(userDB && bcrypt.compareSync(userData.password, userDB.password)){
        let data = {email: userDB.email};
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(data, secret);
        return token;
    } else {
        throw {type: 401, message: "usuário não cadastrado ou senha incorreta"}
    }
}

async function getUserDataByToken(token: string) {
    let tokenData = jwt.verify(token, process.env.JWT_SECRET);
    let userData = await getUsersByEmail(tokenData.email);
    return userData;
}

export const authServices = {
    emailExists,
    insertUserWithNewData,
    login,
    getUserDataByToken
}