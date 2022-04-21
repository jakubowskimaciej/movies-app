import tmdb from 'api/tmdb';
import * as TYPES from './types';
import history from '../history';

// dispatch({ type: TYPES.SET_LOADING });

// dispatch({ type: TYPES.REMOVE_LOADING });

//on app init
export const init = () => async (dispatch) => {
  dispatch({ type: TYPES.SET_LOADING });
  await dispatch(fetchGenres());
  dispatch({ type: TYPES.REMOVE_LOADING });
};

//fetch genres
export const fetchGenres = () => async (dispatch) => {
  try {
    const { data } = await tmdb.get('/genre/movie/list');
    await dispatch({
      type: 'GET_GENRES',
      payload: data.genres,
    });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
    history.push('/404');
  }
};

//fetch movies by discover
export const fetchMovies = (name, page) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING });
    const { data } = await tmdb.get(`/movie/${name}`, {
      params: {
        page,
      },
    });
    await dispatch({
      type: 'GET_MOVIES',
      payload: data,
    });
    dispatch({ type: TYPES.REMOVE_LOADING });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
    // history.push('/404');
  }
};

//fetch movies by selected genre
export const fetchMoviesByGenre = (name, genres, page) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING });

    const genreId = genres
      .filter((el) => el.name === name)
      .map((el) => el.id)
      .join('');
    const { data } = await tmdb.get('/movie/now_playing', {
      params: {
        with_genres: genreId,
        page,
      },
    });
    await dispatch({
      type: 'GET_MOVIES',
      payload: data,
    });
    dispatch({ type: TYPES.REMOVE_LOADING });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
    history.push('/404');
  }
};

//fetch movie details
export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING });

    const { data } = await tmdb.get(`/movie/${id}`);
    await dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: data,
    });
    dispatch({ type: TYPES.REMOVE_LOADING });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
    history.push('/404');
  }
};

//fetch movie videos
export const fetchMovieVideos = (id) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING });

    const { data } = await tmdb.get(`/movie/${id}/videos`);
    await dispatch({
      type: 'GET_MOVIE_VIDEOS',
      payload: data.results,
    });
    dispatch({ type: TYPES.REMOVE_LOADING });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
    history.push('/404');
  }
};

//fetch movies where person appears
export const fetchMoviesByPerson = (id, page) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING });

    const { data } = await tmdb.get(`/discover/movie`, {
      params: {
        with_cast: id,
        page,
      },
    });
    await dispatch({
      type: 'GET_PERSON_MOVIES',
      payload: data,
    });
    dispatch({ type: TYPES.REMOVE_LOADING });
  } catch (err) {
    dispatch({ type: TYPES.SET_ERROR });
  }
};

export const setLoading = () => ({ type: TYPES.SET_LOADING });
export const clearLoading = () => ({ type: TYPES.REMOVE_LOADING });
export const setError = () => ({ type: TYPES.SET_ERROR });
export const clearError = () => ({ type: TYPES.CLEAR_ERROR });
export const clearMovies = () => {
  return {
    type: TYPES.SET_LOADING,
  };
};
