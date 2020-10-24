import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import UploadImages from '../pages/UploadImages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/uploadImages" component={UploadImages} />
      </Switch>
    </BrowserRouter>
  );
}
