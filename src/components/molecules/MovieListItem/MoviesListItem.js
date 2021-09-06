import React from 'react';
import {
  Wrapper,
  StyledImage,
  InfoWrapper,
  StyledTitle,
} from './MovieListItem.styles';

const MovieListItem = ({ movieData: { title, poster_path, vote_average } }) => {
  const posterLink = 'https://image.tmdb.org/t/p/w342';

  return (
    <Wrapper>
      <StyledImage src={posterLink + poster_path} alt={title} />
      <InfoWrapper>
        <StyledTitle>{title}</StyledTitle>
        <p>{vote_average}</p>
      </InfoWrapper>
    </Wrapper>
  );
};

export default MovieListItem;
