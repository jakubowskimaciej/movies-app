import tmdb from 'api/tmdb';

export const useSearch = () => {
  const searchMovies = async (name) => {
    try {
      const { data } = await tmdb.get(`/search/movie`, {
        params: {
          query: name,
          include_adult: false,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    searchMovies,
  };
};
