import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviesByGenre } from 'actions';
import { useParams } from 'react-router';

import MoviesList from 'components/organisms/MoviesList/MoviesList';
import { Title } from 'components/atoms/Title/Title';
import { InfoWrapper } from './Genre.styles';

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
      <InfoWrapper>
        <Title as="h2">{name}</Title>
        <p>movies</p>
      </InfoWrapper>
      <MoviesList movies={movies} />
    </section>
  );
};

export default Genre;
