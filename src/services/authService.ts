async function emailExists(email: string) {
    return false;
}

async function insertUser(data: object) {
    return true
}

export const authServices = {
    emailExists,
    insertUser
}