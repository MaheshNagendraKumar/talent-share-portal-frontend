import { User } from '../../models/User';

export const setUser = (user: User) => ({
  type: 'SET_USER',
  payload: user,
});

export const clearUser = () => ({
  type: 'CLEAR_USER',
});
