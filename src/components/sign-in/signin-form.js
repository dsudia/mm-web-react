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
              this.handleClose();
              browserHistory.push("/profile");
            });
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

export default inject("currentUser", "menus")(observer(SignInForm));
