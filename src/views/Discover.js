import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from 'actions';
import { useParams } from 'react-router';
import { animateScroll as scroll } from 'react-scroll';

import MoviesList from 'components/molecules/MoviesList/MoviesList';
import InfoWrapper from 'components/molecules/InfoWrapper/InfoWrapper';

const NowPlaying = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 500,
    });
    dispatch(fetchMovies(name));
  }, [dispatch, name]);

  return (
    <section>
      <InfoWrapper name={name} />
      <MoviesList movies={movies} />
    </section>
  );
};

export default NowPlaying;
