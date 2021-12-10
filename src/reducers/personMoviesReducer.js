import * as TYPES from 'actions/types';

const INITIAL_STATE = {
  personMovies: [],
};

export const personMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_PERSON_MOVIES:
      return {
        ...state,
        personMovies: action.payload,
      };
    default:
      return state;
  }
};
