import React, { Component } from "react";
import TeacherImg from "../../assets/img/teacher.jpg";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { inject, observer } from "mobx-react";

export default class AboutTeacher extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="For Teachers"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          style={{
            maxWidth: "70%",
            maxHeight: "50%",
            margin: "0 auto"
          }}
          expandable={true}
        >
          <img src={TeacherImg} alt="Montessori Teacher" />
        </CardMedia>
        <CardText expandable={true}>
          <p>
            Teaching is so rewarding. It can also be hard, especially if you’re teaching in a school with a culture, location, or administration that doesn’t work for you.


            We know that when teachers work in schools in which they thrive, the children flourish.
          </p>
          <p>
            Are you ready to find a position in a school that values your contributions, connects you with inspiring colleagues, and is located in a community that is just right for you?
          </p>
          <p>
            Start Here!
          </p>
          <p>
            With a little bit of information about you we can help you find right fit schools looking for a teacher like you.


            Let us be your personal match maker so we can help you find the school of your dreams!
          </p>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Sign Up"
            primary={true}
            onTouchTap={this.props.menus.openRegister}
          />
        </CardActions>
      </Card>
    );
  }
}

export const $ = inject("menus")(observer(AboutTeacher));
