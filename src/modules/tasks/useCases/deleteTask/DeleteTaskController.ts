import { IAppResponse } from '~/@types';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTaskUseCase } from './DeleteTaskUseCase';

type IRequestParams = {
  id: string;
};

class DeleteTaskController {
  async handle(
    req: Request<IRequestParams>,
    res: Response<IAppResponse<any>>
  ): Promise<Response> {
    const { id } = req.params;
    const useCase = container.resolve(DeleteTaskUseCase);

    const deleteTask = await useCase.execute({ _id: id });

    return res.status(200).json({
      success: true,
      message: 'Task Deleted',
      data: deleteTask,
    });
  }
}

export { DeleteTaskController };
