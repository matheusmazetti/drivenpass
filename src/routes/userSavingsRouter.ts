import { Router } from 'express';
import { createNewCard, createNewCredential, deleteCardById, deleteCredentialById, getAllCards, getAllCredentials, getCard, getCredential } from '../controllers/userSavingsController.js';
import { checkToken } from '../middlewares/authMiddleware.js';

const userSavingsRouter = Router();

userSavingsRouter.post("/credentials", checkToken, createNewCredential); //ok
userSavingsRouter.get("/credentials", checkToken, getAllCredentials); //ok
userSavingsRouter.get("/credentials/:id", checkToken, getCredential); //ok
userSavingsRouter.delete("/credentials/:id", checkToken, deleteCredentialById); //ok

userSavingsRouter.post("/notes", checkToken);
userSavingsRouter.get("/notes", checkToken);
userSavingsRouter.get("/notes/:id", checkToken);
userSavingsRouter.delete("/notes/:id", checkToken);

userSavingsRouter.post("/cards", checkToken, createNewCard);
userSavingsRouter.get("/cards", checkToken, getAllCards);
userSavingsRouter.get("/cards/:id", checkToken, getCard);
userSavingsRouter.delete("/cards/:id", checkToken, deleteCardById);

userSavingsRouter.post("/wifi", checkToken);
userSavingsRouter.get("/wifi", checkToken);
userSavingsRouter.get("/wifi/:id", checkToken);
userSavingsRouter.delete("/wifi/:id", checkToken);

export default userSavingsRouter;