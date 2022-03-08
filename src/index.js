import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "@mui/material";

ReactDOM.render(
  // <BrowserRouter>
  //   <Switch>
  <App />,
  /* </Switch>
  </BrowserRouter>, */
  document.getElementById("root")
);
