import { IAppResponse } from '~/@types';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IUpdateUsersDTO } from '../../infra/dtos';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(
    req: Request<{ id: string }, unknown, IUpdateUsersDTO>,
    res: Response<IAppResponse<any>>
  ): Promise<Response> {
    const { id: _id } = req.params;
    const { username, email, password, role } = req.body;
    const useCase = container.resolve(UpdateUserUseCase);

    const user = await useCase.execute({
      _id,
      username,
      email,
      password,
      role,
    });

    return res
      .status(200)
      .json({ success: true, message: 'User Updated', data: user });
  }
}

export { UpdateUserController };
