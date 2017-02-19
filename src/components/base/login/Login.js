import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router";
import FaceIcon from "material-ui/svg-icons/action/face";
import RegisterForm from "../../register/register-form.js";
import SignInForm from "../../sign-in/signin-form.js";
import firebase from "firebase";
import { browserHistory } from "react-router";
import { inject, observer } from 'mobx-react'

export class Login extends Component {
  static muiName = "Login";

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={
            (
              <IconButton>
                <FaceIcon color="#fff" data-test="button-auth-menu" />
              </IconButton>
            )
          }
          targetOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem>
            <FlatButton
              label="Sign Up"
              onTouchTap={this.props.menus.openRegister}
              data-test="button-open-sign-up"
            />
          </MenuItem>
          <MenuItem>
            <FlatButton
              label="Sign In"
              onTouchTap={this.props.menus.openSignIn}
              data-test="button-open-sign-in"
            />
          </MenuItem>
        </IconMenu>
        <SignInForm />
        <RegisterForm />
      </div>
    );
  }
}

export const login = inject('menus')(observer(Login))

class Logged extends Component {
  handleSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.currentUser.clearUser()
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
        <MenuItem
          primaryText="Sign out"
          onTouchTap={this.handleSignOut}
          data-test="button-sign-out"
        />
      </IconMenu>
    );
  }
}

export const logged = inject('currentUser')(observer(Logged))
