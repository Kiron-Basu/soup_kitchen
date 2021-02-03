import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import "./index.css";
import App from "./App";
import configureStore, { setStore } from "./Store";
import { IState } from "./Main/Store/IState";

const store = configureStore() as Store<IState>;
setStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
