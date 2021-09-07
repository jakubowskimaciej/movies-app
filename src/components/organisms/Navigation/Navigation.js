import React, { useEffect } from 'react';
import { ReactComponent as MoviesLogo } from 'assets/movies-logo.svg';
import {
  Wrapper,
  LogoWrapper,
  StyledNavWrapper,
  StyledNavItem,
} from './Navigation.styles';
import { useMovies } from 'hooks/useMovies';

const Navigation = () => {
  const { getGenres, genres } = useMovies();

  useEffect(() => {
    (async () => {
      await getGenres();
    })();
  }, [getGenres]);

  return (
    <Wrapper>
      <LogoWrapper href="/">
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
