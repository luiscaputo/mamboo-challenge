import allTasks from './all';
import createTask from './create';
import deleteTask from './delete';
import getTask from './get';
import updateTask from './update';

export default {
  '/tasks/create': {
    ...createTask,
  },
  '/tasks/update': {
    ...updateTask,
  },
  '/tasks/{id}': {
    ...getTask,
  },
  '/tasks': {
    ...allTasks,
  },
  '/tasks/{id}/remove': {
    ...deleteTask,
  },
};
