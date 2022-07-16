import { Request, Response, NextFunction } from "express";

export function errorHandlingMiddleware(error, req: Request, res: Response, next: NextFunction) {
	return res.sendStatus(error);
}