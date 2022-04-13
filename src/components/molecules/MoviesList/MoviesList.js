import React from 'react';
import MovieListItem from 'components/molecules/MovieListItem/MoviesListItem';
import { Wrapper } from './MoviesList.styles';
import Pagination from '../Pagination/Pagination';

const MoviesList = ({ movies = [], page, totalPages, inWatchlist }) => {
  return (
    <>
      <Wrapper>
        {movies.map((movieData) => (
          <MovieListItem key={movieData.id} movieData={movieData} inWatchlist={inWatchlist} />
        ))}
      </Wrapper>
      <Pagination movies={movies} page={page} total_pages={totalPages} />
    </>
  );
};

export default MoviesList;
