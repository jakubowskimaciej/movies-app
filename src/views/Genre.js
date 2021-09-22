import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviesByGenre } from 'actions';
import { useParams } from 'react-router';

import MoviesList from 'components/molecules/MoviesList/MoviesList';
import InfoWrapper from 'components/molecules/InfoWrapper/InfoWrapper';

const Genre = () => {
  const movies = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
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
