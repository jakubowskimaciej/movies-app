import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviesByGenre } from 'actions';
import { useParams } from 'react-router';
import { animateScroll as scroll } from 'react-scroll';

import MoviesList from 'components/molecules/MoviesList/MoviesList';
import InfoWrapper from 'components/molecules/InfoWrapper/InfoWrapper';

const Genre = () => {
  const movies = useSelector((state) => state.main.movies);
  const genres = useSelector((state) => state.main.genres);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 500,
    });
    dispatch(fetchMoviesByGenre(name, genres));
  }, [dispatch, name, genres]);

  return (
    <section>
      <InfoWrapper name={name} />
      <MoviesList movies={movies} />
    </section>
  );
};

export default Genre;
