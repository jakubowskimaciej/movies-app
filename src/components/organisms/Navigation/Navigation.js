import React from 'react';
import { ReactComponent as MoviesLogo } from 'assets/movies-logo.svg';
import {
  Wrapper,
  LogoWrapper,
  StyledNavWrapper,
  StyledNavItem,
} from './Navigation.styles';

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
          <StyledNavItem key={id} to={`/genre/${name}`}>
            {name}
          </StyledNavItem>
        ))}
      </StyledNavWrapper>
    </Wrapper>
  );
};

export default Navigation;
