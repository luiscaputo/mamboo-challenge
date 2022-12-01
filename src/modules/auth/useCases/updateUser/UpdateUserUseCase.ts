/* eslint-disable no-underscore-dangle */
import { AppError } from '~/shared/errors/AppError';
import { hashPassword } from '~/utils/functions';
import { injectable, inject } from 'tsyringe';

import { IUpdateUsersDTO } from '../../infra/dtos';
import { usersErrorsMessages } from '../../infra/errors/usersErrorsMessages';
import { IAuthRepository } from '../../repositories/IAuthRepository';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('IAuthRepositoryImpl')
    private repository: IAuthRepository
  ) {}
  async execute(props: IUpdateUsersDTO) {
    const user = await this.repository.show({
      _id: props._id,
    });
    if (!user) {
      throw new AppError(usersErrorsMessages.userNotFound, 404);
    }

    const update = await this.repository.update({
      _id: props._id,
      username: props.username,
      email: props.email,
      password: await hashPassword(props.password ?? user.password),
      role: props.role,
    });

    return update;
  }
}

export { UpdateUserUseCase };
