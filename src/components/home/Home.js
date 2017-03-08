import React, { Component } from "react";
import Hero from "../hero/Hero";
import { $ as AboutSchool } from "../about/AboutSchool";
import { $ as AboutTeacher } from "../about/AboutTeacher";
import { HowItWorks } from "../about/HowItWorks";

class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <HowItWorks />
                <AboutTeacher />
                <AboutSchool />
            </div>
        );
    }
}

export default Home;
