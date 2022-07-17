import bcrypt from 'bcrypt';
import UserObject, { getUsersByEmail, insertUser } from "../repositories/authRepositories.js"

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

export const authServices = {
    emailExists,
    insertUserWithNewData
}