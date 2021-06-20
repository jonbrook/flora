import { SET_PLANTS, SET_USER } from './types';

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          id: action.payload.id,
          username: action.payload.username,
        },
      };
    case SET_PLANTS:
      return {
        ...state,
        PlantsByUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
