import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Legal from './components/legal/Legal'
import Profile from './components/profile/Profile'
import './index.css';
import { Route, Router, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey:  'AIzaSyCx9qGnCCieTChB0laygI1YZnkf4BuMRv8',
  authDomain: 'www.montessorimatch.com',
  databaseURL: 'https://montessori-match.firebaseio.com/',
  storageBucket: 'gs://montessori-match.appspot.com'
})

injectTapEventPlugin();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/legal' component={Legal} />
    <Route path='/profile' component={Profile} />
  </Router>,
  document.getElementById('root')
);
