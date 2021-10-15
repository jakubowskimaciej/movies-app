import React, { useState, useEffect } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import Searchbar from 'components/organisms/Searchbar/Searchbar';

import MobileMenu from 'components/organisms/MobileMenu/MobileMenu';

const MainTemplate = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null);

  const changeMobile = () => {
    window.matchMedia('(max-width: 56.25em)').matches
      ? setIsMobile(true)
      : setIsMobile(false);
  };

  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  return (
    <Wrapper>
      {isMobile ? <MobileMenu /> : <Navigation />}
      <Searchbar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
