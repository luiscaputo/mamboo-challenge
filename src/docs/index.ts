import authRoutes from './auth';
import components from './components';
import infos from './infos';
import servers from './servers';
import tags from './tags';
import tasksRoutes from './tasks';
import userRoutes from './users';

export default {
  ...infos,
  ...servers,
  ...tags,
  ...components,
  paths: {
    ...authRoutes,
    ...userRoutes,
    ...tasksRoutes,
  },
};
