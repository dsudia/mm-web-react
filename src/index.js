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
import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
});

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
