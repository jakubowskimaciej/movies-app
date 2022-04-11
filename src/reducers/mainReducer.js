import * as TYPES from 'actions/types';

const INITIAL_STATE = {
  error: false,
  staticCategories: ['popular', 'upcoming'],
  genres: [],
  movies: [],
  loading: true,
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case TYPES.GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case TYPES.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
