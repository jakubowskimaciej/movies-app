import { useCallback } from 'react';
import tmdb from 'api/tmdb';

export const useMovies = () => {
  const getMovies = useCallback(async () => {
    try {
      const { data } = await tmdb.get('/movie/now_playing');
      return data.results;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return {
    getMovies,
  };
};
