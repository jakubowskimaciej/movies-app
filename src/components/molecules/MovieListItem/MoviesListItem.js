import React from 'react';
import {
  Wrapper,
  Image,
  InfoWrapper,
  StyledTitle,
  StyledRating,
} from './MovieListItem.styles';

const MovieListItem = ({
  onClick,
  movieData: { title, poster_path, vote_average, id },
}) => {
  const posterLink = 'https://image.tmdb.org/t/p/w342';

  return (
    <Wrapper to={`/movie/${id}`} onClick={onClick}>
      <Image src={posterLink + poster_path} alt={title} />
      <InfoWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledRating value={vote_average / 2} />
      </InfoWrapper>
    </Wrapper>
  );
};

export default MovieListItem;
