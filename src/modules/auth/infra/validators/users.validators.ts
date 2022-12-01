import { showError } from '~/middlewares';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

import { usersErrorsMessages } from '../errors/usersErrorsMessages';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    username: yup.string().required().min(8).max(32),
    email: yup.string().email().required(usersErrorsMessages.emailIsRequired),
    password: yup
      .string()
      .min(6)
      .max(16)
      .required(usersErrorsMessages.passwordIsRequired),
    role: yup
      .string()
      .matches(/(^admin$|^frontend$|^backend$|^ui\\ux$|^devops$)/)
      .required(),
  });

  await showError(req, res, next, schema);
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(usersErrorsMessages.emailIsRequired),
    password: yup.string().required(usersErrorsMessages.passwordIsRequired),
  });

  await showError(req, res, next, schema);
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    _id: yup.string().required(),
  });

  await showError(req, res, next, schema);
};
