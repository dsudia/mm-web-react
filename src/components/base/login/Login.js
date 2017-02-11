import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router";
import FaceIcon from "material-ui/svg-icons/action/face";
import RegisterForm from "../../register/register-form.js";
import SignInForm from "../../sign-in/signin-form.js";
import * as firebase from "firebase";
import { browserHistory } from "react-router";

export class Login extends Component {
  static muiName = "Login";

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSignIn: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleOpenSignIn = event => {
    this.setState({ openSignIn: true });
  };

  render() {
    return (
      <div>
        <IconMenu
          {...this.props}
          iconButtonElement={<IconButton><FaceIcon color="#fff" /></IconButton>}
          targetOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem>
            <FlatButton
              label="Register"
              onTouchTap={this.handleOpen.bind(this)}
            />
          </MenuItem>
          <MenuItem>
            <FlatButton
              label="Sign In"
              onTouchTap={this.handleOpenSignIn.bind(this)}
            />
          </MenuItem>
        </IconMenu>
        <SignInForm openSignIn={this.state.openSignIn} />
        <RegisterForm open={this.state.open} />
      </div>
    );
  }
}

export class Logged extends Component {
  handleSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        console.log(`user signed out`);
        browserHistory.push(`/`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={<IconButton><FaceIcon color="#fff" /></IconButton>}
        targetOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Link to={`/profile`}><MenuItem primaryText="My Profile" /></Link>
        <MenuItem primaryText="Sign out" onTouchTap={this.handleSignOut} />
      </IconMenu>
    );
  }
}
