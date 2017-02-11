import React, { Component } from "react";
import { Logged, Login } from "../base/login/Login";
import { MainMenu } from "../base/main-menu/MainMenu";
import AppBar from "material-ui/AppBar";
import * as firebase from "firebase";

class Header extends Component {
  state = {
    logged: false
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ logged: true });
      } else {
        this.setState({ logged: false });
      }
    });
  }

  render() {
    return (
      <AppBar
        title="Montessori Match"
        iconElementLeft={<MainMenu />}
        iconElementRight={this.state.logged ? <Logged /> : <Login />}
      />
    );
  }
}

export default Header;
