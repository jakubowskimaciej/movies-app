import * as TYPES from 'actions/types';

const INITIAL = {
  inWatchlist: [],
};

export const inWatchlistReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_WATCHLIST:
      return {
        ...state,
        inWatchlist: [action.payload, ...state.inWatchlist],
      };
    case TYPES.REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        inWatchlist: state.inWatchlist.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
