interface ICreateUsersDTO {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'frontend' | 'backend' | 'backend' | 'ui/ux' | 'devops';
}

interface IUpdateUsersDTO {
  _id: string;
  username?: string;
  email?: string;
  password?: string;
  role?: 'admin' | 'frontend' | 'backend' | 'backend' | 'ui/ux' | 'devops';
}

interface IUserLoginDTO {
  email: string;
  password: string;
}

interface IGetUserByEmail {
  email: string;
}

interface IGetUserDTO {
  _id: string;
}

export {
  ICreateUsersDTO,
  IUpdateUsersDTO,
  IGetUserByEmail,
  IGetUserDTO,
  IUserLoginDTO,
};
