import { IAppResponse } from '~/@types';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetTaskUseCase } from './GetTaskUseCase';

type IRequestParams = {
  id: string;
};

class GetTaskController {
  async handle(
    req: Request<IRequestParams>,
    res: Response<IAppResponse<any>>
  ): Promise<Response> {
    const { id } = req.params;
    const useCase = container.resolve(GetTaskUseCase);

    const task = await useCase.execute({ _id: id });

    return res.status(200).json({
      success: true,
      message: 'Task',
      data: task,
    });
  }
}

export { GetTaskController };
