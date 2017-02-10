import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Legal from './components/legal/Legal'
import Profile from './components/profile/Profile'
import './index.css';
import { Route, Router, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/legal' component={Legal} />
      <Route path='/profile' component={Profile} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
