import React, { Component } from "react";
import SchoolImg from "../../assets/img/school.jpg";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

export default class AboutSchool extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="For Schools"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia expandable={true}>
          <img src={SchoolImg} alt="A Montessori Classroom" />
        </CardMedia>
        <CardText expandable={true}>
          <p>
            Your school is a special place and your community deserves to have the best teachers out there.
            {" "}


            We know that when teachers work in schools in which they thrive, the children flourish.
          </p>
          <p>
            Are you ready to reduce staff turnover and start recruiting teachers who have the skills you need and the personal traits you value?
          </p>
          <p>
            Start Here!
          </p>
          <p>
            With a little bit of information about your school we can help you find right fit teachers looking for a school like yours.
            {" "}


            Let us be your personal match maker so we can help you find the teaching team of your dreams!
          </p>
        </CardText>
        <CardActions>
          <FlatButton label="Sign Up" />
        </CardActions>
      </Card>
    );
  }
}
