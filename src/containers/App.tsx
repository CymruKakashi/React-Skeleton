import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./HomePage"
import {configuredStore} from "../store";

export default function App() {
  return (
    <Provider store={configuredStore()}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
