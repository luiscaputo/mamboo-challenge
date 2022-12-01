import { inject, injectable } from 'tsyringe';

import { ITasksRepository } from '../../repositories/ITasksRepository';

@injectable()
class AllTasksUseCase {
  constructor(
    @inject('ITasksRepositoryImpl')
    private repository: ITasksRepository
  ) {}
  async execute() {
    return this.repository.index();
  }
}

export { AllTasksUseCase };
