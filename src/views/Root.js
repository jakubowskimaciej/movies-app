import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MoviesList from 'components/organisms/MoviesList/MoviesList';

const Root = () => {
  return (
    <MainTemplate>
      <MoviesList />
    </MainTemplate>
  );
};

export default Root;
