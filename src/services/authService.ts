import { getUsersByEmail } from "../repositories/authRepositories.js"

async function emailExists(email: string) {
    let result = await getUsersByEmail(email);
    return result;
}

export const authServices = {
    emailExists
}