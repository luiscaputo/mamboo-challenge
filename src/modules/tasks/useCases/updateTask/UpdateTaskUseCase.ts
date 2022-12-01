import { inject, injectable } from 'tsyringe';

import { IUpdateTaskDTO } from '../../infra/dtos';
import { ITasksRepository } from '../../repositories/ITasksRepository';

@injectable()
class UpdateTaskUseCase {
  constructor(
    @inject('ITasksRepositoryImpl')
    private repository: ITasksRepository
  ) {}
  async execute(props: IUpdateTaskDTO) {
    return this.repository.update({
      // eslint-disable-next-line no-underscore-dangle
      _id: props._id,
      title: props.title,
      description: props.description,
      priority: props.priority,
      tags: props.tags,
      members: props.members,
      status: props.status,
      startedAt: props.startedAt,
      finishedAt: props.finishedAt,
    });
  }
}

export { UpdateTaskUseCase };
