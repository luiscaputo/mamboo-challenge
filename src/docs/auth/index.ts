import login from './login';
import register from './register';

export default {
  '/auth/register': {
    ...register,
  },
  '/auth/login': {
    ...login,
  },
};
