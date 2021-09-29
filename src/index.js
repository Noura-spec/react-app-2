import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  //use the BrowserRouter to define when and which page should loaded:
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
