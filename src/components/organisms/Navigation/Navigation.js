import React from 'react';
import { ReactComponent as MoviesLogo } from 'assets/movies-logo.svg';
import { Wrapper, LogoWrapper, StyledNavWrapper } from './Navigation.styles';
import GenreButton from 'components/atoms/GenreButton/GenreButton';
import { useDispatch, useSelector } from 'react-redux';
import { StyledInfoTitle } from 'components/atoms/StyledInfoTitle/StyledInfoTitle';
import { clearError } from 'actions';

const Navigation = ({ isOpen, clicked, history }) => {
  const genres = useSelector((state) => state.main.genres);
  const categories = useSelector((state) => state.main.staticCategories);
  const dispatch = useDispatch();

  return (
    <Wrapper isOpen={isOpen}>
      <LogoWrapper to="/" onClick={() => dispatch(clearError())}>
        <MoviesLogo />
      </LogoWrapper>
      <StyledNavWrapper>
        <StyledInfoTitle>discover</StyledInfoTitle>
        {categories.map((item) => (
          <GenreButton key={item} to={`/discover/${item}`} onClick={clicked}>
            {item}
          </GenreButton>
        ))}
        <GenreButton to={`/watchlist`} onClick={clicked}>
          watchlist
        </GenreButton>
        <StyledInfoTitle>genres</StyledInfoTitle>
        {genres.map(({ id, name }) => (
          <GenreButton key={id} to={`/genre/${name}`} onClick={clicked}>
            {name}
          </GenreButton>
        ))}
      </StyledNavWrapper>
    </Wrapper>
  );
};

export default Navigation;
