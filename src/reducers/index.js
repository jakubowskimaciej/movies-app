import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';

export default combineReducers({
  main: moviesReducer,
});
