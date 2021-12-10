import * as TYPES from 'actions/types';

const INITIAL_STATE = {
  movieDetails: [],
  movieVideos: [],
};

export const movieDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case TYPES.GET_MOVIE_VIDEOS:
      return {
        ...state,
        movieVideos: action.payload,
      };
    default:
      return state;
  }
};
