import express from "express";
import { prisma } from "../prisma";
import messages from "../common/messages/messages";
import { OpError } from "../common/ErrorHandling/errors";
import bcrypt from "bcrypt";
import { jwtSign } from "../common/utils";

export const signup = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    },
  });

  res.status(200).json({
    data: user,
    status: "success",
    message: messages.success.USERCREATED,
  });
};

export const login = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new OpError(messages.error.MISSING_CREDENTIALS, 400));

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !(await bcrypt.compare(password, user.password)))
    return next(new OpError(messages.error.WRONG_CREDENTIALS, 400));

  const token = jwtSign({ id: user.id });

  res.status(200).json({
    data: { token },
    status: "success",
  });
};
