import { Router } from 'express';
import { createNewCredential, deleteCredentialById, getAllCredentials, getCredential } from '../controllers/userSavingsController.js';
import { checkToken } from '../middlewares/authMiddleware.js';

const userSavingsRouter = Router();

userSavingsRouter.post("/credentials", checkToken, createNewCredential); //ok
userSavingsRouter.get("/credentials", checkToken, getAllCredentials); //ok
userSavingsRouter.get("/credentials/:id", checkToken, getCredential); //ok
userSavingsRouter.delete("/credentials/:id", checkToken, deleteCredentialById);

userSavingsRouter.post("/notes", checkToken);
userSavingsRouter.get("/notes", checkToken);
userSavingsRouter.get("/notes/:id", checkToken);
userSavingsRouter.delete("/notes/:id", checkToken);

userSavingsRouter.post("/cards", checkToken);
userSavingsRouter.get("/cards", checkToken);
userSavingsRouter.get("/cards/:id", checkToken);
userSavingsRouter.delete("/cards/:id", checkToken);

userSavingsRouter.post("/wifi", checkToken);
userSavingsRouter.get("/wifi", checkToken);
userSavingsRouter.get("/wifi/:id", checkToken);
userSavingsRouter.delete("/wifi/:id", checkToken);

export default userSavingsRouter;