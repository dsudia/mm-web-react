import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import * as firebase from "firebase";
import { browserHistory } from "react-router";

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

export default class SignInForm extends React.Component {
  state = {
    openSignIn: this.props.openSignIn,
    email: ``,
    password: ``
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ openSignIn: nextProps.openSignIn });
  }

  handleClose = () => {
    this.setState({ openSignIn: false });
  };

  signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.handleClose();
            browserHistory.push("/profile");
          } else {
            console.log("no user is signed in");
          }
        });
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
          open={this.state.openSignIn}
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
