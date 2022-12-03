import updateUser from './updateUser';

export default {
  '/users/{id}/update': {
    ...updateUser,
  },
};
