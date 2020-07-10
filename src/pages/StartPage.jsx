import React from "react";
import { Link } from "react-router-dom";

import { routes, messages } from "../config/constants";
import Box from "../components/styles/Box";
import Typography from "../components/styles/Typography";
import InitialLayout from "./layout/Initial";

const StartPage = () =>  {
  console.log('Opa', routes);
  
  return (
  <InitialLayout>
    <Box.Nav
      display="flex"
      style={{
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <Link to={routes.projects}>
        <Typography color="black" variant="button">
          {messages.pages.projects}
        </Typography>
      </Link>
      <Link to={routes.register}>
        <Typography color="black" variant="button">
          {messages.pages.register}
        </Typography>
      </Link>
    </Box.Nav>
  </InitialLayout>
)
};

export default StartPage;
