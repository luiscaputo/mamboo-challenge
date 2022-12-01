import { AppError } from '~/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { IGetTaskByIdDTO } from '../../infra/dtos';
import { tasksErrorsMessages } from '../../infra/errors/tasksErrosMessages';
import { ITasksRepository } from '../../repositories/ITasksRepository';

@injectable()
class GetTaskUseCase {
  constructor(
    @inject('ITasksRepositoryImpl')
    private repository: ITasksRepository
  ) {}
  async execute({ _id }: IGetTaskByIdDTO) {
    const task = await this.repository.show({ _id });
    if (!task) {
      throw new AppError(tasksErrorsMessages.taskNotFound, 404);
    }
    return task;
  }
}

export { GetTaskUseCase };
