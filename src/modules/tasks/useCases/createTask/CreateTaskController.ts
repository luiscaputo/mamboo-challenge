import { IAppResponse } from '~/@types';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateTaskDTO } from '../../infra/dtos';
import { CreateTaskUseCase } from './CreateTaskUseCase';

class CreateTaskController {
  async handle(
    req: Request<unknown, unknown, ICreateTaskDTO>,
    res: Response<IAppResponse<any>>
  ): Promise<Response> {
    const {
      title,
      description,
      priority,
      status,
      members,
      tags,
      startedAt,
      finishedAt,
    } = req.body;
    const useCase = container.resolve(CreateTaskUseCase);

    const task = await useCase.execute({
      title,
      description,
      priority,
      status,
      members,
      tags,
      startedAt,
      finishedAt,
    });

    return res
      .status(201)
      .json({ success: true, message: 'Task Created', data: task });
  }
}

export { CreateTaskController };
