import { Router } from 'express';

import { CreateUserController } from '../../useCases/createUser/CreateUserController';
import { LoginController } from '../../useCases/login/LoginController';
import { createUser, loginUser } from '../validators/users.validators';

const routes = Router();

routes.post('/auth/register', createUser, new CreateUserController().handle);
routes.post('/auth/login', loginUser, new LoginController().handle);

export default routes;
