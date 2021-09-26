const initialState = {
  staticCategories: ['popular', 'upcoming'],
  genres: [],
  movies: [],
  movieDetails: [],
  movieVideos: [],
  personMovies: [],
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  loading: true,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_LOADING':
      return {
        ...state,
        loading: false,
      };
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload,
      };
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'GET_MOVIE_DETAILS':
      return {
        ...state,
        movieDetails: action.payload,
      };
    case 'GET_MOVIE_VIDEOS':
      return {
        ...state,
        movieVideos: action.payload,
      };
    case 'GET_PERSON_MOVIES':
      return {
        ...state,
        personMovies: action.payload,
      };
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'REMOVE_FROM_WATCHLIST':
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
