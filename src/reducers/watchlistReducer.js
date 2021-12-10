import * as TYPES from 'actions/types';

const INITIAL_STATE = {
  watchlist: [],
};

export const watchlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case TYPES.REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
