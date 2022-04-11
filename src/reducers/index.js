import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { errorReducer } from './errorReducer';

import { mainReducer } from './mainReducer';
import { movieDetailsReducer } from './movieDetailsReducer';
import { personMoviesReducer } from './personMoviesReducer';
import { watchlistReducer } from './watchlistReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['watchlist'],
};

const rootReducer = combineReducers({
  main: mainReducer,
  movie: movieDetailsReducer,
  person: personMoviesReducer,
  watchlist: watchlistReducer,
  error: errorReducer,
});

export default persistReducer(persistConfig, rootReducer);
