import React, { useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { init } from 'actions';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Discover = lazy(() => import('./Discover'));
const Genre = lazy(() => import('./Genre'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Person = lazy(() => import('./Person'));
const Watchlist = lazy(() => import('./Watchlist'));

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
import Loader from 'components/atoms/Loader/Loader';

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

  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
