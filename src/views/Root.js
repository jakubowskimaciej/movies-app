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
              <Redirect to="/discover/now_playing" />
            </Route>
            <Route path="/discover/:name">
              <NowPlaying />
            </Route>
            <Route path="/genre/:name">
              <Genre />
            </Route>
          </Switch>
        </MainTemplate>
      )}
    </Router>
  );
};

export default Root;
