import { prisma } from "../database";

interface UserObject {
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