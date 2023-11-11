import express from "express";
import messages from "../common/messages/messages";

export const authenticationMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const token = req.headers.authorization;
  if (!token) next(new OpError(messages.error.UNAUTHORIZED, 401));
  next();
};
