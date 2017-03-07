import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import TextField from "material-ui/TextField";
import firebase from "firebase";
import { browserHistory } from "react-router";
import { writeInitialData } from "../../databaseCalls/userCalls";
import { inject, observer } from "mobx-react";
import validator from "validator";
import passValidator from "password-validator";
import rp from "request-promise";

const schema = new passValidator();

schema
  .isMin(8)
  .isMax(24)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .not()
  .spaces()
  .has()
  .symbols();

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

  // postToMailchimp(email, firstName, lastName, type) {
  //   let mmerge;
  //   if (type === "teacher") {
  //     mmerge = "I'm a teacher";
  //   } else {
  //     mmerge = "I represent a school";
  //   }

  //   const options = {
  //     method: "POST",
  //     uri: process.env.REACT_APP_MAILCHIMP_URI,
  //     form: {
  //       EMAIL: email,
  //       FNAME: firstName,
  //       LNAME: lastName,
  //       MMERGE3: mmerge
  //     }
  //   };

  //   return rp(options);
  // }

  createNewUser = () => {
    if (
      this.state.firstNameError ||
        this.state.lastNameError ||
        this.state.emailError ||
        this.state.displayNameError ||
        this.state.passError ||
        this.state.confPassError
    ) {
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ userId: user.uid });
            this.props.currentUser.setId(user.uid)
            writeInitialData(
              user.uid,
              this.state.firstName,
              this.state.lastName,
              this.state.displayName,
              this.state.memberType,
              process.env.NODE_ENV
            );
            this.props.currentUser.setProfile({
              username: this.state.displayName,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              memberType: this.state.memberType
            });
            this.props.menus.closeRegister();
            browserHistory.push("/profile");
          } else {
            console.log("no user is signed in");
          }
          // return this.postToMailchimp(
          //   this.state.email,
          //   this.state.firstName,
          //   this.state.lastName,
          //   this.state.memberType
          // );
        });
      })
      .catch(error => {
        this.setState({ emailError: error.message });
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
    if (value === "" || value === undefined || value === null) {
      this.setState({
        firstNameError: "First name is required",
        firstName: value
      });
      return;
    }
    this.setState({
      firstName: value,
      firstNameError: false
    });
  };

  handleLastNameChange = (event, value) => {
    if (value === "" || value === undefined || value === null) {
      this.setState({
        lastNameError: "Last name is required",
        lastName: value
      });
      return;
    }
    this.setState({
      lastName: value,
      lastNameError: false
    });
  };

  handleDisplayNameChange = (event, value) => {
    if (value === "" || value === undefined || value === null) {
      this.setState({
        displayNameError: "Display name is required",
        displayName: value
      });
      return;
    }
    this.setState({
      displayName: value,
      displayNameError: false
    });
  };

  handleEmailChange = (event, value) => {
    if (value === "" || value === undefined || value === null) {
      this.setState({
        emailError: "Email is required",
        email: value
      });
      return;
    }
    if (!validator.isEmail(value)) {
      this.setState({
        emailError: "Please enter an email address",
        email: value
      });
      return;
    }
    this.setState({
      email: value,
      emailError: false
    });
  };

  handlePasswordChange = (event, value) => {
    const validPass = schema.validate(value);
    if (validPass) {
      this.setState({
        password: value,
        passError: false
      });
      return;
    }
    this.setState({
      passError: "Password: > 8 characters, >= one number, one uppercase, one lowercase, one symbol",
      password: value
    });
  };

  handleConfPassChange = (event, value) => {
    if (value !== this.state.password) {
      this.setState({
        confirmPassword: value,
        confPassError: true
      });
      return;
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
          label="Cancel"
          primary={true}
          onTouchTap={this.props.menus.closeRegister}
        />
      ),
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
                <TextField
                  className="half-width"
                  hintText="First Name"
                  onChange={this.handleFirstNameChange}
                  data-test="field-first-name"
                  errorText={
                    this.state.firstNameError ? this.state.firstNameError : null
                  }
                />
                <TextField
                  className="half-width"
                  hintText="Last Name"
                  onChange={this.handleLastNameChange}
                  data-test="field-last-name"
                  errorText={
                    this.state.lastNameError ? this.state.lastNameError : null
                  }
                />
                <TextField
                  className="half-width"
                  hintText="Email"
                  onChange={this.handleEmailChange}
                  data-test="field-email"
                  errorText={
                    this.state.emailError ? this.state.emailError : null
                  }
                />
                <TextField
                  className="half-width"
                  hintText="Display Name"
                  onChange={this.handleDisplayNameChange}
                  data-test="field-display-name"
                  errorText={
                    this.state.displayNameError
                      ? this.state.displayNameError
                      : null
                  }
                />
                <TextField
                  className="half-width"
                  hintText="Password"
                  type="password"
                  onChange={this.handlePasswordChange}
                  data-test="field-password"
                  errorText={this.state.passError ? this.state.passError : null}
                />
                <TextField
                  className="half-width"
                  hintText="Confirm Password"
                  type="password"
                  onChange={this.handleConfPassChange}
                  data-test="field-conf-password"
                  errorText={
                    this.state.confPassError ? "Passwords do not match" : null
                  }
                />
              </div>
            : <div>
                <TextField
                  className="half-width"
                  hintText="School Name"
                  onChange={this.handleFirstNameChange}
                  data-test="field-first-name"
                  errorText={
                    this.state.firstNameError ? this.state.firstNameError : null
                  }
                />
                <TextField
                  className="half-width"
                  hintText="Email"
                  onChange={this.handleEmailChange}
                  data-test="field-email"
                  errorText={
                    this.state.emailError ? this.state.emailError : null
                  }
                />
                <TextField
                  className="half-width"
                  hintText="Display Name"
                  onChange={this.handleDisplayNameChange}
                  data-test="field-display-name"
                  errorText={
                    this.state.displayNameError
                      ? this.state.displayNameError
                      : null
                  }
                />
                <TextField
                  className="half-width"
                  hintText="Password"
                  type="password"
                  onChange={this.handlePasswordChange}
                  data-test="field-password"
                  errorText={this.state.passError ? this.state.passError : null}
                />
                <TextField
                  className="half-width"
                  hintText="Confirm Password"
                  type="password"
                  onChange={this.handleConfPassChange}
                  data-test="field-conf-password"
                  errorText={
                    this.state.confPassError ? "Passwords do not match" : null
                  }
                />
              </div>}
        </Dialog>
      </div>
    );
  }
}

export default inject("currentUser", "menus")(observer(RegisterForm));
