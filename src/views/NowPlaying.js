import React, { useState, useEffect } from 'react';
import { useMovies } from 'hooks/useMovies';
import MoviesList from 'components/organisms/MoviesList/MoviesList';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const { getMovies } = useMovies();

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies);
    })();
  }, [getMovies]);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default NowPlaying;
