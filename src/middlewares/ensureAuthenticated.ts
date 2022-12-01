import { IAuthRepositoryImpl } from '~/modules/auth/repositories/implementations/IAuthRepositoryImpl';
import { AppError } from '~/shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayLod {
  id: string;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token is missing', 404);
  }
  const [, token] = authHeader.split(' ');

  try {
    const { id } = verify(
      token,
      process.env.JWT_SECRET ?? ''
    ) as unknown as IPayLod;

    const userRepository = new IAuthRepositoryImpl();
    const user = await userRepository.show({ _id: id });

    if (!user) {
      throw new AppError('User not exists', 404);
    }

    next();
  } catch (error: any) {
    throw new AppError(error?.message);
  }
}
