import { IAppResponse } from '~/@types';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AllTasksUseCase } from './AllTasksUseCase';

class AllTasksController {
  async handle(
    _: Request<unknown>,
    res: Response<IAppResponse<[]>>
  ): Promise<Response> {
    const useCase = container.resolve(AllTasksUseCase);

    const tasks = await useCase.execute();

    return res.status(200).json({
      success: true,
      message: 'All tasks',
      data: tasks,
    });
  }
}

export { AllTasksController };
