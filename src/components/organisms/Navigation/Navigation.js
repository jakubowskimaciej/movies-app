import React from 'react';
import { ReactComponent as MoviesLogo } from 'assets/movies-logo.svg';
import { Wrapper, LogoWrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <LogoWrapper href="/">
        <MoviesLogo />
      </LogoWrapper>
      <ul>
        <li>nav item</li>
        <li>nav item</li>
        <li>nav item</li>
        <li>nav item</li>
        <li>nav item</li>
      </ul>
    </Wrapper>
  );
};

export default Navigation;
