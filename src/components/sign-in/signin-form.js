import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import firebase from "firebase";
import { inject, observer } from "mobx-react";
import { browserHistory } from "react-router";
import Promise from "bluebird";
import * as translators from "../profile/translators";
import { getMatchProfile, getProfileData } from "../../databaseCalls/userCalls";
import validator from "validator"

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
    super(props);
    this.state = {
      email: ``,
      password: ``
    };
  }

  translateMatchingProfile() {
    const translatedMatchingProfile = {
      exists: true,
      ageRanges: translators.translateAgeRanges(
        this.props.currentUser.matchingProfile.ageRanges
      ),
      cals: translators.translateCals(
        this.props.currentUser.matchingProfile.cals
      ),
      orgType: translators.translateOrgTypes(
        this.props.currentUser.matchingProfile.orgTypes
      ),
      sizes: translators.translateSizes(
        this.props.currentUser.matchingProfile.sizes
      ),
      states: translators.translateStates(
        this.props.currentUser.matchingProfile.states
      ),
      trainings: translators.translateTrainings(
        this.props.currentUser.matchingProfile.trainings
      ),
      traits: translators.translateTraits(
        this.props.currentUser.matchingProfile.traits
      )
    };
    return translatedMatchingProfile;
  }

  signIn = () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.props.currentUser.setId(user.uid);
            return Promise.all([
              getProfileData(user.uid),
              getMatchProfile(user.uid)
            ]).spread((profileData, matchProfileData) => {
              const userData = profileData.val();
              const matchProfile = matchProfileData.val();
              this.props.currentUser.setProfile({
                username: userData.displayName,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: user.email
              });
              if (matchProfile !== null) {
                this.props.currentUser.setMatchingProfile(matchProfile);
              }
              const exists = this.props.currentUser.matchingProfile.ageRanges !==
                undefined;
              if (exists) {
                this.props.currentUser.setTranslatedMatchingProfile(
                  this.translateMatchingProfile()
                );
              }
              this.props.menus.closeSignIn();
              browserHistory.push("/profile");
            });
          } else {
            console.log("no user is signed in");
          }
        });
      })
      .catch(error => {
        this.setState({passError: "Invalid email or password"})
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
      })
      return
    }
    this.setState({
      email: value,
      emailError: false
    });
  };

  handlePasswordChange = (event, value) => {
    if (value === "" || value === undefined || value === null) {
      this.setState({
        passError: "Password is required",
        password: value
      });
      return;
    }
    this.setState({
      password: value,
      passError: false
    });
  };

  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.props.menus.closeSignIn}
        />,
        <FlatButton
          label="Sign In"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.signIn}
        />
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
              errorText={this.state.emailError ? this.state.emailError : null}
            />
            <TextField
              className="half-width"
              hintText="Password"
              type="password"
              onChange={this.handlePasswordChange}
              errorText={this.state.passError ? this.state.passError : null}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default inject("currentUser", "menus")(observer(SignInForm));
