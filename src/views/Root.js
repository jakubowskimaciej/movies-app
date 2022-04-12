import React, { useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { init } from 'actions';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Discover from './Discover';
import Watchlist from './Watchlist';
import Person from './Person';
import MovieDetails from './MovieDetails';
import Genre from './Genre';

import {
  faDotCircle,
  faLink,
  faPlayCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faWindowClose,
  faTimesCircle,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ShowError from './ShowError';
import history from '../history';
import tmdb from 'api/tmdb';

library.add(
  faDotCircle,
  faImdb,
  faLink,
  faPlayCircle,
  faWindowClose,
  faTimesCircle,
  faPlusCircle,
  faTrashAlt
);

export const posterLink = `https://image.tmdb.org/t/p/`;

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const res = await tmdb.get('/configuration');
      console.log(res);
    })();
  }, []);

  return (
    <Router history={history}>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            <Redirect to="/discover/popular" />
          </Route>
          <Route path="/discover/:name">
            <Discover />
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
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/404" component={ShowError} />
          <Route path="*" component={ShowError} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
