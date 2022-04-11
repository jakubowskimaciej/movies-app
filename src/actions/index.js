import tmdb from 'api/tmdb';
import * as TYPES from './types';
import history from '../history';

//on app init
export const init = () => async (dispatch) => {
  await dispatch(fetchGenres());
  dispatch({ type: 'REMOVE_LOADING' });
};

//fetch genres
export const fetchGenres = () => async (dispatch) => {
  try {
    const { data } = await tmdb.get('/genre/movie/list');
    dispatch({
      type: 'GET_GENRES',
      payload: data.genres,
    });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
    history.push('/404');
  }
};

//fetch movies by discover
export const fetchMovies = (name) => async (dispatch) => {
  try {
    const { data } = await tmdb.get(`/movie/${name}`);
    dispatch({
      type: 'GET_MOVIES',
      payload: data.results,
    });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
    history.push('/404');
  }
};

//fetch movies by selected genre
export const fetchMoviesByGenre = (name, genres) => async (dispatch) => {
  try {
    const genreId = genres
      .filter((el) => el.name === name)
      .map((el) => el.id)
      .join('');
    const { data } = await tmdb.get('/movie/now_playing', {
      params: {
        with_genres: genreId,
      },
    });
    dispatch({
      type: 'GET_MOVIES',
      payload: data.results,
    });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
    history.push('/404');
  }
};

//fetch movie details
export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    const { data } = await tmdb.get(`/movie/${id}`);
    dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: data,
    });
  } catch (err) {
    console.log('error caught');
  }
};

//fetch movie videos
export const fetchMovieVideos = (id) => async (dispatch) => {
  try {
    const { data } = await tmdb.get(`/movie/${id}/videos`);
    dispatch({
      type: 'GET_MOVIE_VIDEOS',
      payload: data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

//fetch movies where person appears
export const fetchMoviesByPerson = (id) => async (dispatch) => {
  try {
    const { data } = await tmdb.get(`/discover/movie`, {
      params: {
        with_cast: id,
      },
    });
    dispatch({
      type: 'GET_PERSON_MOVIES',
      payload: data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setError = () => ({ type: TYPES.SET_ERROR });
export const clearError = () => ({ type: TYPES.CLEAR_ERROR });
