import React, { Component } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AboutSchool from './components/about/AboutSchool'
import AboutTeacher from './components/about/AboutTeacher'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <AboutTeacher/>
        <AboutSchool/>
      </div>
    );
  }
}

export default App;
