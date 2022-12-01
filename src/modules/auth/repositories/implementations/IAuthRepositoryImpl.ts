import { User } from '~/configs/db/entities/Users.entity';

import {
  IGetUserDTO,
  ICreateUsersDTO,
  IUpdateUsersDTO,
  IGetUserByEmail,
} from '../../infra/dtos';
import { IAuthRepository } from '../IAuthRepository';

class IAuthRepositoryImpl implements IAuthRepository {
  async show({ _id }: IGetUserDTO): Promise<any | null> {
    return User.findById(_id);
  }
  async create({
    username,
    email,
    password,
    role,
  }: ICreateUsersDTO): Promise<any | null> {
    const user = await User.create({
      username,
      email,
      password,
      role,
    });
    return user;
  }
  async update({
    _id,
    username,
    email,
    password,
    role,
  }: IUpdateUsersDTO): Promise<any | null> {
    const updateUser = await User.findByIdAndUpdate(_id, {
      $set: {
        username,
        email,
        password,
        role,
      },
    });
    return updateUser;
  }
  async getUserByEmail({ email }: IGetUserByEmail): Promise<any> {
    return User.findOne({ email });
  }
}

export { IAuthRepositoryImpl };
