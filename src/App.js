import React, { Component } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
      </div>
    );
  }
}

export default App;
