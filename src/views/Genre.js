import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { clearMovies, fetchMoviesByGenre } from 'actions';

import { animateScroll as scroll } from 'react-scroll';
import queryString from 'query-string';

import MoviesList from 'components/molecules/MoviesList/MoviesList';
import InfoWrapper from 'components/molecules/InfoWrapper/InfoWrapper';
import Loader from 'components/atoms/Loader/Loader';

const Genre = () => {
  const { loading, genres, movies } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const { name } = useParams();
  const location = useLocation();

  const { page } = queryString.parse(location.search);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 150,
    });
    dispatch(fetchMoviesByGenre(name, genres, page));

    return () => clearMovies();
  }, [dispatch, name, genres, page]);

  return (
    <>
      {loading && !movies.length ? (
        <Loader />
      ) : (
        <section>
          <InfoWrapper name={name} />
          <MoviesList movies={movies.results} page={movies.page} totalPages={movies.total_pages} />
        </section>
      )}
    </>
  );
};

export default Genre;
