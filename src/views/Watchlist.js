import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import MoviesList from 'components/molecules/MoviesList/MoviesList';
import InfoWrapper from 'components/molecules/InfoWrapper/InfoWrapper';
import Loader from 'components/atoms/Loader/Loader';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const loading = useSelector((state) => state.main.loading);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 500,
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <InfoWrapper name="watchlist">Watchlist</InfoWrapper>
          <MoviesList movies={watchlist} inWatchlist />
        </Wrapper>
      )}
    </>
  );
};

export default Watchlist;
