import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import Searchbar from 'components/organisms/Searchbar/Searchbar';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Searchbar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
