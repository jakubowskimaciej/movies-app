import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import NowPlaying from './NowPlaying';
import Genre from './Genre';

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            <Redirect to="/now-playing" />
          </Route>
          <Route path="/now-playing">
            <NowPlaying />
          </Route>
          <Route path="/genre/:name">
            <Genre />
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
