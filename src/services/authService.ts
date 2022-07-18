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

async function login(userData: UserObject) {
    let userDB = await getUsersByEmail(userData.email);
    console.log(userDB);
    if(userDB && bcrypt.compareSync(userData.password, userDB.password)){
        return true
    } else {
        throw {type: 401, message: "usuário não cadastrado ou senha incorreta"}
    }
}

export const authServices = {
    emailExists,
    insertUserWithNewData,
    login
}