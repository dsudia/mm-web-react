import React from "react";
import { IndexRoute, Route } from "react-router";
import App from "./components/containers/App";
import Legal from "./components/legal/Legal";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home"

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/legal" component={Legal} />
    <Route path="/profile" component={Profile} />
  </Route>
);
