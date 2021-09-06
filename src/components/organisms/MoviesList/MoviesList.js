import React, { useState, useEffect } from 'react';
import MovieListItem from 'components/molecules/MovieListItem/MoviesListItem';
import { Wrapper } from './MoviesList.styles';
import { useMovies } from 'hooks/useMovies';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const { getMovies } = useMovies();

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies);
    })();
  }, [getMovies]);

  return (
    <Wrapper>
      {movies.map((movieData) => (
        <MovieListItem key={movieData.id} movieData={movieData} />
      ))}
    </Wrapper>
  );
};

export default MoviesList;
