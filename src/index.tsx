import React from "react";

import ReactDOM from "react-dom/client";
import "regenerator-runtime";
import * as Router from "react-router-dom";
import "./index.scss";

import App from "./App";

import { store } from "@redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Router.HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </Router.HashRouter>,
);

if (module.hot) {
  module.hot.accept();
}
