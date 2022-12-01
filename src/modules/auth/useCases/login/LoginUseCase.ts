import { AppError } from '~/shared/errors/AppError';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import { IUserLoginDTO } from '../../infra/dtos';
import { usersErrorsMessages } from '../../infra/errors/usersErrorsMessages';
import { IAuthRepository } from '../../repositories/IAuthRepository';

@injectable()
class LoginUseCase {
  constructor(
    @inject('IAuthRepositoryImpl')
    private repository: IAuthRepository
  ) {}
  async execute(props: IUserLoginDTO) {
    const user = await this.repository.getUserByEmail({
      email: props.email,
    });

    if (!user) {
      throw new AppError(usersErrorsMessages.userNotFound);
    }

    const isPasswordMatch = await bcrypt.compare(props.password, user.password);
    if (!isPasswordMatch) {
      throw new AppError(usersErrorsMessages.incorrectEmailOrPassword);
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? '', {
      expiresIn: '7d',
    });
    const { _id: id, email, username, role } = user;

    return {
      auth: {
        type: 'jwt',
        token,
      },
      user: {
        id,
        username,
        email,
        role,
      },
    };
  }
}

export { LoginUseCase };
