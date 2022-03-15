import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import {configuredStore} from "./store";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';

const store = configuredStore();
function render(Component: any) {
  ReactDOM.render(
      (
          <Provider store={store}>
              <Component />
          </Provider>
      ),
      document.getElementById("root")
  );
}

render(App);

if ((module as any).hot) {
  (module as any).hot.accept("./containers/App", () => {
      const NextApp = require("./containers/App").default;
      render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
