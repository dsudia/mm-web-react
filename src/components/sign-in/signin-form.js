import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import firebase from "firebase";
import { inject, observer } from "mobx-react";
import { browserHistory } from "react-router";
import * as translators from "../profile/translators";
import {
    getMatchProfiles,
    getProfileData
} from "../../databaseCalls/userCalls";
import validator from "validator";
import { runMatchComparison } from "../../databaseCalls/matchCompare/compare";

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
            orgTypes: translators.translateOrgTypes(
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
            ),
            locTypes: translators.translateLocTypes(
                this.props.currentUser.matchingProfile.locTypes
            ),
            edTypes: translators.translateEdTypes(
                this.props.currentUser.matchingProfile.edTypes
            )
        };
        return translatedMatchingProfile;
    }

    signIn = () => {
        let userData;
        return firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        this.props.currentUser.setId(user.uid);
                        return getProfileData(user.uid).then(profileData => {
                            userData = profileData.val();
                            return getMatchProfiles(
                                user.uid,
                                userData.memberType
                            ).then(matchProfileData => {
                                const matchProfile = matchProfileData.val();
                                let matchProfiles;
                                if (matchProfile) {
                                    matchProfiles = Object.keys(
                                        matchProfile
                                    ).map(key => {
                                        matchProfile[key].uuid = key;
                                        return matchProfile[key];
                                    });
                                }
                                this.props.currentUser.setProfile({
                                    username: userData.displayName,
                                    firstName: userData.firstName,
                                    lastName: userData.lastName,
                                    email: user.email,
                                    memberType: userData.memberType
                                });
                                if (matchProfile !== null) {
                                    this.props.currentUser.setMatchingProfile(
                                        matchProfiles[0]
                                    );
                                } else {
                                    this.props.currentUser.setMatchingProfile({
                                        ageRanges: [],
                                        ageRangesWgt: 10,
                                        cals: [],
                                        calsWgt: 10,
                                        orgTypes: [],
                                        orgTypesWgt: 10,
                                        locTypes: [],
                                        locTypesWgt: 10,
                                        edTypes: [],
                                        edTypesWgt: 10,
                                        sizes: [],
                                        sizesWgt: 10,
                                        trainings: [],
                                        trainingsWgt: 10,
                                        traits: [],
                                        traitsWgt: 10,
                                        states: [],
                                        statesWgt: 10
                                    });
                                }
                                runMatchComparison(
                                    user.uid,
                                    userData.memberType
                                );
                                const exists = this.props.currentUser.matchingProfile !==
                                    undefined;
                                if (exists) {
                                    this.props.currentUser.setTranslatedMatchingProfile(
                                        this.translateMatchingProfile()
                                    );
                                }
                                this.props.menus.closeSignIn();
                                browserHistory.push("/profile");
                            });
                        });
                    }
                });
            })
            .catch(error => {
                this.setState({ passError: "Invalid email or password" });
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
            (
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.props.menus.closeSignIn}
                />
            ),
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
                            errorText={
                                this.state.emailError
                                    ? this.state.emailError
                                    : null
                            }
                        />
                        <TextField
                            className="half-width"
                            hintText="Password"
                            type="password"
                            onChange={this.handlePasswordChange}
                            errorText={
                                this.state.passError
                                    ? this.state.passError
                                    : null
                            }
                        />
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default inject("currentUser", "menus")(observer(SignInForm));
