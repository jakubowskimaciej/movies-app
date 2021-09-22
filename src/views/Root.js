import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { init } from 'actions';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import NowPlaying from './NowPlaying';
import Genre from './Genre';
import MovieDetails from './MovieDetails';
import Person from './Person';

import {
  faDotCircle,
  faLink,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faWindowClose,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faDotCircle,
  faImdb,
  faLink,
  faPlayCircle,
  faWindowClose,
  faTimesCircle
);

const Root = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <MainTemplate>
          <Switch>
            <Route exact path="/">
              <Redirect to="/discover/popular" />
            </Route>
            <Route path="/discover/:name">
              <NowPlaying />
            </Route>
            <Route path="/genre/:name">
              <Genre />
            </Route>
            <Route path="/movie/:id">
              <MovieDetails />
            </Route>
            <Route path="/person/:id">
              <Person />
            </Route>
          </Switch>
        </MainTemplate>
      )}
    </Router>
  );
};

export default Root;
