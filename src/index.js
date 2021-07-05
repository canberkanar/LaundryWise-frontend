import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const setTZ = require('set-tz')

setTZ('UTC')

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
