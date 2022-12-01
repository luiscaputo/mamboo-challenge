import { IAppResponse } from '~/@types';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IUpdateTaskDTO } from '../../infra/dtos';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

class UpdateTaskController {
  async handle(
    req: Request<unknown, unknown, IUpdateTaskDTO>,
    res: Response<IAppResponse<any>>
  ): Promise<Response> {
    const {
      _id,
      title,
      description,
      priority,
      status,
      members,
      tags,
      startedAt,
      finishedAt,
    } = req.body;
    const useCase = container.resolve(UpdateTaskUseCase);

    const task = await useCase.execute({
      _id,
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
      .status(200)
      .json({ success: true, message: 'Task Updated', data: task });
  }
}

export { UpdateTaskController };
