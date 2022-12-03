import { Router } from 'express';

import { UpdateUserController } from '../../useCases/updateUser/UpdateUserController';
import { updateUser } from '../validators/users.validators';

const routes = Router();

routes.put('/users/:id/update', updateUser, new UpdateUserController().handle);

export default routes;
