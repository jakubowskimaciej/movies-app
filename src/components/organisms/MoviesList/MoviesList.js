import React from 'react';
import MovieListItem from 'components/molecules/MovieListItem/MoviesListItem';
import { Wrapper } from './MoviesList.styles';

const MoviesList = ({ movies = [] }) => {
  return (
    <Wrapper>
      {movies.map((movieData) => (
        <MovieListItem key={movieData.id} movieData={movieData} />
      ))}
    </Wrapper>
  );
};

export default MoviesList;
