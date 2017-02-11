import React, { Component } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import AboutSchool from "./components/about/AboutSchool";
import AboutTeacher from "./components/about/AboutTeacher";
import "./App.css";
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
});

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <AboutTeacher />
        <AboutSchool />
      </div>
    );
  }
}

export default App;
