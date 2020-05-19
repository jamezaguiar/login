import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Success from './pages/Success';
import Fail from './pages/Fail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/success" exact component={Success} />
        <Route path="/fail" exact component={Fail} />
      </Switch>
    </BrowserRouter>
  );
}
