import * as TYPES from 'actions/types';

const INITIAL_STATE = {
  error: false,
};

export const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_ERROR:
      return {
        ...state,
        error: true,
      };
    case TYPES.CLEAR_ERROR:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
};
