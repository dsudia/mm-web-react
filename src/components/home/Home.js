import React, { Component } from "react";
import Hero from "../hero/Hero";
import AboutSchool from "../about/AboutSchool";
import AboutTeacher from "../about/AboutTeacher";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <AboutTeacher />
        <AboutSchool />
      </div>
    );
  }
}

export default Home;
