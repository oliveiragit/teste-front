import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import UploadImages from '../pages/UploadImages';
import Graphs from '../pages/Graphs';
import Globe from '../pages/Globe';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/uploadImages" />
        <Route path="/uploadImages" exact component={UploadImages} />
        <Route path="/globe" component={Globe} />
        <Route path="/graphs" component={Graphs} />
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
