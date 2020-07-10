import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Async from "../pages/Async";
import StartPage from "../pages/StartPage";
import RegisterRoutes from "../pages/RegisterRoutes";
import ProjectsRoutes from "../pages/ProjectsRoutes"
import { routes } from "../config/constants";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={StartPage} />
    <Route path={routes.register} component={RegisterRoutes} />
    <Route path={routes.projects} component={ProjectsRoutes} />
  </Switch>
);

export default Routes;
