import { SET_PLANTS, SET_USER } from './types';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setPlants = (plants) => ({
  type: SET_PLANTS,
  payload: plants,
});
