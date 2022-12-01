import { Router } from 'express';

import { AllTasksController } from '../../useCases/allTasks/AllTasksController';
import { CreateTaskController } from '../../useCases/createTask/CreateTaskController';
import { DeleteTaskController } from '../../useCases/deleteTask/DeleteTaskController';
import { GetTaskController } from '../../useCases/getTask/GetTaskController';
import { UpdateTaskController } from '../../useCases/updateTask/UpdateTaskController';
import { createTask } from '../validators/tasks.validators';

const routes = Router();

routes.get('/tasks/:id', new GetTaskController().handle);

routes.get('/tasks', new AllTasksController().handle);

routes.post('/tasks/create', createTask, new CreateTaskController().handle);

routes.put('/tasks/update', new UpdateTaskController().handle);

routes.delete('/tasks/:id/remove', new DeleteTaskController().handle);

export default routes;
