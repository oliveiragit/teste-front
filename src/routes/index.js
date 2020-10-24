import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ImagesUpload from '../pages/UploadImages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/imagesUpload" component={ImagesUpload} />
      </Switch>
    </BrowserRouter>
  );
}
