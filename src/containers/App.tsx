import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import routes from "../constants/routes.json";

export default function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={routes.HOME}>
            <HomePage />
          </Route>
          <Route exact path={routes.ABOUT}>
            <AboutPage />
          </Route>
        </Switch>
      </Router>
  );
}
