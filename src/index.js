import React from "react";
import ReactDOM from "react-dom";

import store from "./store/store";
import { Provider } from "react-redux";

import "./styles.css";
import C1 from "./c1";
import C2 from "./c2";

function App() {
  return (
    <div className="App">
      <C1 />
      <C2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
