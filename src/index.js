import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./fonts/PacaembuVar-subset.woff2";
import "./fonts/PacaembuVar-latin.woff2";
import "./fonts/MulishVar-latin.woff2";

import "./styles/index.css";

import App from "./containers";
import reducers from "./reducers";

// remove enhancer during yarn build time
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, enhancer);

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
