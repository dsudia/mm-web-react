import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import firebase from "firebase";
import { inject, observer } from 'mobx-react'
import { browserHistory } from 'react-router'

const styles = {
  title: {
    textAlign: "center"
  },
  dialogBox: {
    width: "70%",
    margin: "auto",
    maxWidth: "none"
  },
  marginTop: {
    marginTop: "2rem"
  },
  form: {
    display: "flex",
    textAlign: "left"
  }
};

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ``,
      password: ``
    };
  }

  handleClose = () => {
    this.props.menus.closeSignIn();
  };

  signIn = () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.props.currentUser.setId(user.uid)
            this.handleClose();
            browserHistory.push("/profile")
          } else {
            console.log('no user is signed in')
          }
        })
      })
      .catch(error => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  handleEmailChange = (event, value) => {
    this.setState({ email: value });
  };

  handlePasswordChange = (event, value) => {
    this.setState({ password: value });
  };

  render() {
    const actions = [
      (
        <FlatButton
          label="Sign In"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.signIn}
        />
      )
    ];

    return (
      <div>
        <Dialog
          title="Sign In"
          actions={actions}
          modal={false}
          open={this.props.menus.signInIsOpen}
          onRequestClose={this.handleClose}
        >
          Welcome!
          <div
            style={styles.marginTop}
            className="display-flex half-width text-left"
          >
            <TextField
              className="half-width"
              hintText="Email"
              onChange={this.handleEmailChange}
            />
            <TextField
              className="half-width"
              hintText="Password"
              type="password"
              onChange={this.handlePasswordChange}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default inject('currentUser', 'menus')(observer(SignInForm))
