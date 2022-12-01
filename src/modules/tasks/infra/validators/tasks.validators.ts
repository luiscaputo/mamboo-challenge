import { showError } from '~/middlewares';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    title: yup.string().required().min(8).max(40),
    description: yup.string().required(),
    priority: yup.number().min(1).max(8).required(),
    status: yup
      .string()
      .matches(/(^in-backlog$|^pending$|^in-progress$|^in-pr$|^done$)/)
      .required(),
    tags: yup.string().required(),
  });

  await showError(req, res, next, schema);
};
