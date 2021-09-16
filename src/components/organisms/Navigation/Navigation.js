import React from 'react';
import { ReactComponent as MoviesLogo } from 'assets/movies-logo.svg';
import { Wrapper, LogoWrapper, StyledNavWrapper } from './Navigation.styles';
import GenreButton from 'components/atoms/GenreButton/GenreButton';

import { useSelector } from 'react-redux';

const Navigation = () => {
  const genres = useSelector((state) => state.genres);

  return (
    <Wrapper>
      <LogoWrapper to="/discover/popular">
        <MoviesLogo />
      </LogoWrapper>
      <StyledNavWrapper>
        {genres.map(({ id, name }) => (
          <GenreButton key={id} to={`/genre/${name}`}>
            {name}
          </GenreButton>
        ))}
      </StyledNavWrapper>
    </Wrapper>
  );
};

export default Navigation;
