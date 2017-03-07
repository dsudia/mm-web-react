import React, { Component } from "react";
import Logo from "../../assets/img/mm.png";
import { Card, CardActions, CardMedia } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

class Hero extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          style={{
            maxWidth: "70%",
            maxHeight: "50%",
            margin: "0 auto"
          }}
        >
          <img src={Logo} alt="Montessori Match Logo" />
        </CardMedia>
        <CardActions>
          <a
            href="http://montessorimatch.us14.list-manage.com/subscribe?u=9be45c7772ad2a078cc4b091d&amp;id=91ce5d5d68"
            target="_blank"
          >
            <RaisedButton
              label="Sign up for our mailing list to get updates!"
              secondary={true}
            />
          </a>
        </CardActions>
      </Card>
    );
  }
}

export default Hero;
