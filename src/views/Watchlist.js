import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MoviesList from 'components/molecules/MoviesList/MoviesList';
import styled from 'styled-components';
import InfoWrapper from 'components/molecules/InfoWrapper/InfoWrapper';
import { animateScroll as scroll } from 'react-scroll';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 500,
    });
    // localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, []);

  return (
    <Wrapper>
      <InfoWrapper name="watchlist">Watchlist</InfoWrapper>
      <MoviesList movies={watchlist} inWatchlist />
    </Wrapper>
  );
};

export default Watchlist;
