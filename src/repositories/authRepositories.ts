import { prisma } from "../database.js";

export default interface UserObject {
    email: string,
    password: string
}

export async function getUsersByEmail(email: string){
    let users = await prisma.users.findFirst({
        where: {
            email: email
        }
    });
    return users;
}

export async function insertUser(Data: UserObject) {
    await prisma.users.create({
        data: Data
    });    
}
