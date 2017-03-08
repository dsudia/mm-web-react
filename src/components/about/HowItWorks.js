import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

export class HowItWorks extends Component {
    render() {
        return (
            <Card>
                <CardHeader title="How It Works" />
                <CardText>
                    <h3>
                        Welcome to Montessori Match!
                    </h3>
                    <p>
                        We take an innovative new approach to finding jobs and hiring, that takes culture into account.
                    </p>
                    <p>
                        When you sign up, we'll ask you to fill out a cultural profile. Once we have that, we'll compare your profile with schools (if you're a teacher) or teachers (if you're a school) to find great fits for you!
                    </p>
                    <p>
                        Once you have some potential matches, you'll have the opportunity to see more information about them. If you have any interest in a potential match, you can say so.
                    </p>
                    <p>
                        If your potential match shows interest in you also, you're matched up! From there we'll get you communicating so you can move forward with finding your new job or new teacher!
                    </p>
                </CardText>
            </Card>
        );
    }
}
