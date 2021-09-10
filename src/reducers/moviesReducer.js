const initialState = {
  genres: [],
  movies: [],
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
    default:
      return state;
  }
};
