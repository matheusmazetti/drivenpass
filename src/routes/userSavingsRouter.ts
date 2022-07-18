import { Router } from 'express';
import { createNewCard, createNewCredential, createNewNote, createNewWifi, deleteCardById, deleteCredentialById, deleteNoteById, deleteWifiById, getAllCards, getAllCredentials, getAllNotes, getAllWifis, getCard, getCredential, getNote, getWifi } from '../controllers/userSavingsController.js';
import { checkToken } from '../middlewares/authMiddleware.js';

const userSavingsRouter = Router();

userSavingsRouter.post("/credentials", checkToken, createNewCredential); //ok
userSavingsRouter.get("/credentials", checkToken, getAllCredentials); //ok
userSavingsRouter.get("/credentials/:id", checkToken, getCredential); //ok
userSavingsRouter.delete("/credentials/:id", checkToken, deleteCredentialById); //ok

userSavingsRouter.post("/notes", checkToken, createNewNote);
userSavingsRouter.get("/notes", checkToken, getAllNotes);
userSavingsRouter.get("/notes/:id", checkToken, getNote);
userSavingsRouter.delete("/notes/:id", checkToken, deleteNoteById);

userSavingsRouter.post("/cards", checkToken, createNewCard);
userSavingsRouter.get("/cards", checkToken, getAllCards);
userSavingsRouter.get("/cards/:id", checkToken, getCard);
userSavingsRouter.delete("/cards/:id", checkToken, deleteCardById);

userSavingsRouter.post("/wifi", checkToken, createNewWifi);
userSavingsRouter.get("/wifi", checkToken, getAllWifis);
userSavingsRouter.get("/wifi/:id", checkToken, getWifi);
userSavingsRouter.delete("/wifi/:id", checkToken, deleteWifiById);

export default userSavingsRouter;