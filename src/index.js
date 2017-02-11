import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Legal from "./components/legal/Legal";
import Profile from "./components/profile/Profile";
import "./index.css";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Route, Router, browserHistory } from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/legal" component={Legal} />
      <Route path="/profile" component={Profile} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
