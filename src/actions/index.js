import tmdb from 'api/tmdb';

//on app init
export const init = () => async (dispatch) => {
  await dispatch(fetchGenres());
  dispatch({ type: 'REMOVE_LOADING' });
};

//fetch genres
export const fetchGenres = () => async (dispatch) => {
  const { data } = await tmdb.get('/genre/movie/list');
  dispatch({
    type: 'GET_GENRES',
    payload: data.genres,
  });
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
    console.log(err);
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
    console.log(err);
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
    console.log(err);
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
