import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import TextField from "material-ui/TextField";
import firebase from "firebase";
import { browserHistory } from "react-router";
import { writeInitialData } from "../../databaseCalls/userCalls";
import { inject, observer } from "mobx-react";

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

class RegisterForm extends Component {
  state = {
    memberType: "teacher",
    firstName: "",
    lastName: "",
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    userId: null
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  createNewUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ userId: user.uid });
            writeInitialData(
              user.uid,
              this.state.firstName,
              this.state.lastName,
              this.state.displayName,
              this.state.memberType,
              process.env.NODE_ENV
            );
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

  handleRadioChange = (event, value) => {
    if (value === "teacher") {
      this.setState({ memberType: "teacher", lastname: "" });
    } else if (value === "school") {
      this.setState({ memberType: "school", lastname: "school" });
    }
  };

  handleFirstNameChange = (event, value) => {
    this.setState({ firstName: value });
  };

  handleLastNameChange = (event, value) => {
    this.setState({ lastName: value });
  };

  handleDisplayNameChange = (event, value) => {
    this.setState({ displayName: value });
  };

  handleEmailChange = (event, value) => {
    this.setState({ email: value });
  };

  handlePasswordChange = (event, value) => {
    this.setState({ password: value });
  };

  handleConfPassChange = (event, value) => {
    if (value !== this.state.password) {
      this.setState({
        confirmPassword: value,
        confPassError: true
      })
      return
    }
    this.setState({
      confirmPassword: value,
      confPassError: false
    });
  };

  render() {
    const actions = [
      (
        <FlatButton
          label="Register"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.createNewUser}
          data-test="button-submit-sign-up"
        />
      )
    ];

    return (
      <div>
        <Dialog
          title="Sign Up"
          actions={actions}
          modal={false}
          open={this.props.menus.registerIsOpen}
          onRequestClose={this.createNewUser}
        >
          I'm signing up as a...

          <div
            style={styles.marginTop}
            className="display-flex half-width text-left"
          >
            <RadioButtonGroup
              onChange={this.handleRadioChange}
              name="memberType"
              defaultSelected="teacher"
            >
              <RadioButton
                value="teacher"
                label="Teacher"
                style={styles.radioButton}
                data-test="radio-teacher"
              />
              <RadioButton
                value="school"
                label="School"
                style={styles.radioButton}
                data-test="radio-school"
              />
            </RadioButtonGroup>
          </div>
          {this.state.memberType === "teacher"
            ? <div>
                <div style={styles.form}>
                  <TextField
                    className="half-width"
                    hintText="First Name"
                    onChange={this.handleFirstNameChange}
                    data-test="field-first-name"
                  />
                  <TextField
                    className="half-width"
                    hintText="Last Name"
                    onChange={this.handleLastNameChange}
                    data-test="field-last-name"
                  />
                </div>
                <div style={styles.form}>
                  <TextField
                    className="half-width"
                    hintText="Email"
                    onChange={this.handleEmailChange}
                    data-test="field-email"
                  />
                  <TextField
                    className="half-width"
                    hintText="Display Name"
                    onChange={this.handleDisplayNameChange}
                    data-test="field-display-name"
                  />
                </div>
                <div style={styles.form}>
                  <TextField
                    className="half-width"
                    hintText="Password"
                    type="password"
                    onChange={this.handlePasswordChange}
                    data-test="field-password"
                  />
                  <TextField
                    className="half-width"
                    hintText="Confirm Password"
                    type="password"
                    onChange={this.handleConfPassChange}
                    data-test="field-conf-password"
                    errorText={this.state.confPassError ? "Passwords do not match" : null}
                  />
                </div>
              </div>
            : <div>
                <div style={styles.form}>
                  <TextField className="half-width" hintText="School Name" />
                </div>
                <div style={styles.form}>
                  <TextField className="half-width" hintText="Email" />
                  <TextField className="half-width" hintText="Display Name" />
                </div>
                <div style={styles.form}>
                  <TextField
                    className="half-width"
                    hintText="Password"
                    type="password"
                  />
                  <TextField
                    className="half-width"
                    hintText="Confirm Password"
                    type="password"
                  />
                </div>
              </div>}
        </Dialog>
      </div>
    );
  }
}

export default inject("menus")(observer(RegisterForm));
