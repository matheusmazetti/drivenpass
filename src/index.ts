import express from "express";
import "express-async-errors";
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from "./routes/authRouter.js";
import { errorHandlingMiddleware } from "./middlewares/errorHandling.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use(authRouter);
app.use(errorHandlingMiddleware);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log('servidor em pé na porta ', PORT);
});
