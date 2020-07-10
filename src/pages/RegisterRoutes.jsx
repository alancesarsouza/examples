import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "../config/constants";
import Login from "./Login/Login";

const RegisterRoutes = () => {
  return (
    <Switch>
      <Route path={routes.login} component={Login} />
      <Redirect to={routes.login} />
    </Switch>
  );
};

export default RegisterRoutes;
