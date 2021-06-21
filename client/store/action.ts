import { SET_PLANTS, SET_USER } from './types';

export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user,
});

export const setPlants = (plants: PlantsByUser[]) => ({
  type: SET_PLANTS,
  payload: plants,
});
