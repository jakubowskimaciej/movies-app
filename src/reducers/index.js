import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { errorReducer } from './errorReducer';
import { inWatchlistReducer } from './inWatchlistReducer';

import { mainReducer } from './mainReducer';
import { movieDetailsReducer } from './movieDetailsReducer';
import { personMoviesReducer } from './personMoviesReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['inWatchlist'],
};

const rootReducer = combineReducers({
  main: mainReducer,
  movie: movieDetailsReducer,
  person: personMoviesReducer,
  inWatchlist: inWatchlistReducer,
  error: errorReducer,
});

export default persistReducer(persistConfig, rootReducer);
