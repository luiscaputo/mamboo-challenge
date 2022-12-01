// importing files
import { ensureAuthenticated } from '~/middlewares/ensureAuthenticated';
import authRoutes from '~/modules/auth/infra/routes/auth.routes';
import usersRoutes from '~/modules/auth/infra/routes/users.routes';
import tasksRoutes from '~/modules/tasks/infra/routes/tasks.routes';
import { Router } from 'express';

import baseRoute from './base.routes';

const routes = Router();

// base route
routes.use(baseRoute);
routes.use(authRoutes);
// authenticated routes
routes.use(ensureAuthenticated);
routes.use(usersRoutes);
routes.use(tasksRoutes);

export default routes;
