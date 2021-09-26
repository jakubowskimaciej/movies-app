import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MoviesList from 'components/molecules/MoviesList/MoviesList';
import styled from 'styled-components';
import InfoWrapper from 'components/molecules/InfoWrapper/InfoWrapper';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <Wrapper>
      <InfoWrapper name="watchlist">Watchlist</InfoWrapper>
      <MoviesList movies={watchlist} inWatchlist />
    </Wrapper>
  );
};

export default Watchlist;
