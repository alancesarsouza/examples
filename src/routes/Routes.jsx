import React from 'react'
import { Route,  Switch , Redirect} from 'react-router-dom';

import Async from '../pages/Async';
import StartPage from '../pages/StartPage';

import { routes } from '../config/constants';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to={routes.project}/>
      </Route>

      <Route path={routes.project} component={StartPage}/>
      <Route  path={routes.async} component={Async}/>
    </Switch>
  )
};

export default Routes;
