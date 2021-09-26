import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledLink,
  Image,
  InfoWrapper,
  StyledTitle,
  StyledRating,
  StyledButton,
  Wrapper,
} from './MovieListItem.styles';

const MovieListItem = ({
  onClick,
  inWatchlist,
  movieData: { title, poster_path, vote_average, id },
}) => {
  const posterLink = 'https://image.tmdb.org/t/p/w342';
  const dispatch = useDispatch();

  //delete movie from watchlist
  const handleDeleteFromWatchlist = (id) => {
    dispatch({
      type: 'REMOVE_FROM_WATCHLIST',
      payload: id,
    });
  };

  return (
    <Wrapper>
      <StyledLink to={`/movie/${id}`} onClick={onClick}>
        <Image src={posterLink + poster_path} alt={title} />
        <InfoWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledRating value={vote_average / 2} />
        </InfoWrapper>
      </StyledLink>
      {inWatchlist ? (
        <StyledButton isSecondary onClick={() => handleDeleteFromWatchlist(id)}>
          <FontAwesomeIcon icon={['far', 'trash-alt']} />
        </StyledButton>
      ) : null}
    </Wrapper>
  );
};

export default MovieListItem;
