import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import UploadImages from '../pages/UploadImages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/uploadImages" component={UploadImages} />
      </Switch>
    </BrowserRouter>
  );
}
