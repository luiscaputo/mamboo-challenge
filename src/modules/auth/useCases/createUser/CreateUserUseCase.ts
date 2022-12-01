import { AppError } from '~/shared/errors/AppError';
import { hashPassword } from '~/utils/functions';
import { injectable, inject } from 'tsyringe';

import { ICreateUsersDTO } from '../../infra/dtos';
import { usersErrorsMessages } from '../../infra/errors/usersErrorsMessages';
import { IAuthRepository } from '../../repositories/IAuthRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('IAuthRepositoryImpl')
    private repository: IAuthRepository
  ) {}
  async execute(props: ICreateUsersDTO) {
    const alreadyExistsUser = await this.repository.getUserByEmail({
      email: props.email,
    });
    if (alreadyExistsUser) {
      throw new AppError(usersErrorsMessages.userAlreadyExists, 404);
    }

    const user = await this.repository.create({
      username: props.username,
      email: props.email,
      password: await hashPassword(props.password),
      role: props.role,
    });

    return user;
  }
}

export { CreateUserUseCase };
