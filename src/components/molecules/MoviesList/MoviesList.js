import React from 'react';
import MovieListItem from 'components/molecules/MovieListItem/MoviesListItem';
import { ButtonWrapper, Wrapper } from './MoviesList.styles';
import { Button } from 'components/atoms/Button/Button';

const MoviesList = ({ movies = [], inWatchlist }) => {
  return (
    <>
      <Wrapper>
        {movies.map((movieData) => (
          <MovieListItem
            key={movieData.id}
            movieData={movieData}
            inWatchlist={inWatchlist}
          />
        ))}
      </Wrapper>
      <ButtonWrapper>
        <Button>Previous page</Button>
        <Button isSecondary>Next page</Button>
      </ButtonWrapper>
    </>
  );
};

export default MoviesList;
