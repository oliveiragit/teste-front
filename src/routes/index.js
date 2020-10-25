import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import UploadImages from '../pages/UploadImages';
import Graph from '../pages/Graph';
import Globe from '../pages/Globe';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/uploadImages" component={UploadImages} />
        <Route path="/globe" component={Graph} />
        <Route path="/globe" component={Globe} />
      </Switch>
    </BrowserRouter>
  );
}
