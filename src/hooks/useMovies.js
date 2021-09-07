import { useCallback, useState } from 'react';
import tmdb from 'api/tmdb';

export const useMovies = () => {
  const [genres, setGenres] = useState([]);

  const getMovies = useCallback(
    async (name) => {
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
        return data.results;
      } catch (err) {
        console.log(err);
      }
    },
    [genres]
  );

  const getGenres = useCallback(async () => {
    try {
      const { data } = await tmdb.get('/genre/movie/list');
      setGenres(data.genres);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return {
    genres,
    getMovies,
    getGenres,
  };
};
