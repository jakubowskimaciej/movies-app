import React, { useState, useEffect } from 'react';
import { useMovies } from 'hooks/useMovies';
import MoviesList from 'components/organisms/MoviesList/MoviesList';
import { useParams } from 'react-router';

const Genre = () => {
  const { name } = useParams();
  const { getGenres, getMovies } = useMovies();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  useEffect(() => {
    (async () => {
      setMovies(await getMovies(name));
    })();
  }, [getMovies, name]);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Genre;
