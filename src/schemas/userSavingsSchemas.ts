import joi from 'joi';

export const credentialsSchema = joi.object({
    title: joi.string().min(1).required(),
    username: joi.string().min(1).required(),
    password: joi.string().min(1).required(),
    url: joi.string().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/).required()
});

export const notesSchema = joi.object({
    title: joi.string().min(1).max(50).required(),
    note: joi.string().min(1).max(1000).required()
});

export const cardSchema = joi.object({
    title: joi.string().min(1).max(50).required(),
    number: joi.string().min(1).required(),
    cvv: joi.string().min(3).max(3).required(),
    name: joi.string().min(1).required(),
    expirationDate: joi.string().min(1).required(),
    mode: joi.string().valid('credit', 'debit').required(),
    virtual: joi.boolean()
});

export const wifiSchema = joi.object({
    title: joi.string().min(1).required(),
    wifi: joi.string().min(1).required(),
    password: joi.string().min(1).required()
});