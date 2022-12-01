import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IUserLoginDTO } from '../../infra/dtos';
import { LoginUseCase } from './LoginUseCase';

class LoginController {
  async handle(
    req: Request<unknown, unknown, IUserLoginDTO>,
    res: Response
  ): Promise<Response> {
    const { email, password } = req.body;
    const useCase = container.resolve(LoginUseCase);

    const login = await useCase.execute({ email, password });

    return res
      .status(200)
      .json({ success: true, message: 'User Logged', data: login });
  }
}

export { LoginController };
