/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//other stuff that only needs to happen in the browser...

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
