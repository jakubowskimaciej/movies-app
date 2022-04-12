import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { clearMovies, fetchMovies } from 'actions';

import { animateScroll as scroll } from 'react-scroll';
import queryString from 'query-string';

import MoviesList from 'components/molecules/MoviesList/MoviesList';
import InfoWrapper from 'components/molecules/InfoWrapper/InfoWrapper';
import Loader from 'components/atoms/Loader/Loader';

const Discover = () => {
  const { loading, movies } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const { name } = useParams();
  const location = useLocation();

  const { page } = queryString.parse(location.search);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 250,
    });
    dispatch(fetchMovies(name, page));

    return () => clearMovies();
  }, [dispatch, name, page]);

  console.log(movies);

  return (
    <>
      {loading && !movies.length ? (
        <Loader />
      ) : (
        <section>
          <InfoWrapper name={name} />
          <MoviesList movies={movies.results} />
        </section>
      )}
    </>
  );
};

export default Discover;
