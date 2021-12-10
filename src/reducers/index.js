import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
import { movieDetailsReducer } from './movieDetailsReducer';
import { personMoviesReducer } from './personMoviesReducer';
import { watchlistReducer } from './watchlistReducer';

export default combineReducers({
  main: mainReducer,
  movie: movieDetailsReducer,
  person: personMoviesReducer,
  watchlist: watchlistReducer,
});
