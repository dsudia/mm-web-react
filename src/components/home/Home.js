import React, { Component } from "react";
import Hero from "../hero/Hero";
import { $ as AboutSchool } from "../about/AboutSchool";
import { $ as AboutTeacher } from "../about/AboutTeacher";

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
