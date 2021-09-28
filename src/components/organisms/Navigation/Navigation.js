import React from 'react';
import { ReactComponent as MoviesLogo } from 'assets/movies-logo.svg';
import { Wrapper, LogoWrapper, StyledNavWrapper } from './Navigation.styles';
import GenreButton from 'components/atoms/GenreButton/GenreButton';
import StickyBox from 'react-sticky-box';

import { useSelector } from 'react-redux';
import { StyledInfoTitle } from 'components/atoms/StyledInfoTitle/StyledInfoTitle';

const Navigation = () => {
  const genres = useSelector((state) => state.genres);
  const categories = useSelector((state) => state.staticCategories);

  return (
    <Wrapper>
      <StickyBox>
        <LogoWrapper to="/discover/popular">
          <MoviesLogo />
        </LogoWrapper>
        <StyledNavWrapper>
          <StyledInfoTitle>discover</StyledInfoTitle>
          {categories.map((item) => (
            <GenreButton key={item} to={`/discover/${item}`}>
              {item}
            </GenreButton>
          ))}
          <GenreButton to={`/watchlist`}>watchlist</GenreButton>
          <StyledInfoTitle>genres</StyledInfoTitle>
          {genres.map(({ id, name }) => (
            <GenreButton key={id} to={`/genre/${name}`}>
              {name}
            </GenreButton>
          ))}
        </StyledNavWrapper>
      </StickyBox>
    </Wrapper>
  );
};

export default Navigation;
