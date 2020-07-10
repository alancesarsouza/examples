import React from "react";
import { Link } from "react-router-dom";
import Typography from "../components/styles/Typography";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes, messages } from "../config/constants";
import Async from "./Async";
import InitialLayout from "../pages/layout/Initial";

const ProjectsRoutes = () => {
  console.log("Entrou no Project routes", routes);
  return (
    <>
      <Route exact path={routes.projects}>
        <InitialLayout>
          <Link to={routes.async}>
            <Typography color="black" variant="button">
              {messages.projects.async}
            </Typography>
          </Link>
        </InitialLayout>
      </Route>

      <Switch>
        <Route path={routes.async} component={Async} />
      </Switch>
    </>
  );
};

export default ProjectsRoutes;
