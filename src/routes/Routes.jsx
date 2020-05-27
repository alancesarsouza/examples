import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Async from '../pages/Async';
import StartPage from '../pages/StartPage';
import InitilaLayout from '../pages/layout/Initial';
import { routes } from '../config/constants';


const Routes = () => (
  <Switch>
    <InitilaLayout>
      <Route exact path='/'>
        <Redirect to={routes.project} />
      </Route>
      <Route exact path={routes.project} component={StartPage} />
      <Route path={routes.async} component={Async} />
    </InitilaLayout>
  </Switch>
);

export default Routes;
