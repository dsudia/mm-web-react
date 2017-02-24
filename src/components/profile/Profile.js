import React, { Component } from "react";
import { List, ListItem, Subheader } from "material-ui/List";
import AccountCircle from "material-ui/svg-icons/action/account-circle"
import FaceIcon from "material-ui/svg-icons/action/face";
import PersonIcon from "material-ui/svg-icons/social/person";
import DateIcon from "material-ui/svg-icons/action/date-range";
import PersonOutlineIcon from "material-ui/svg-icons/social/person-outline";
import EmailIcon from "material-ui/svg-icons/communication/mail-outline";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { $ as MatchProfileContainer } from "../match-profile/container/MatchProfCont";
import * as translators from "./translators";
import firebase from "firebase";
import { getProfileData } from "../../databaseCalls/userCalls";
import { inject, observer } from "mobx-react";
import { browserHistory } from "react-router";
import Avatar from 'material-ui/Avatar'

class Profile extends Component {
  constructor(props) {
    super(props);
    const traits = localStorage.getItem(`traits`);
    this.state = {
      user: {},
      open: false,
      matchingProfile: {
        exists: traits ? true : false,
        ageRanges: translators.translateAgeRanges(),
        cals: translators.translateCals(),
        orgType: translators.translateOrgTypes(),
        sizes: translators.translateSizes(),
        states: localStorage.getItem(`states`),
        trainings: translators.translateTrainings(),
        traits: translators.translateTraits()
      }
    };
  }

  componentWillMount() {
    const user = firebase.auth().currentUser;
    if (user) {
      return getProfileData(user.uid, "development").then(data => {
        const userData = data.val();
        this.props.currentUser.setProfile({
          username: userData.displayName,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: user.email
        });
      });
    } else {
      console.log("no user is signed in");
      browserHistory.push("/");
    }
  }

  handleFillProfileClick() {
    this.setState({ open: true });
  }

  render() {
    const profile = this.props.currentUser.profile;
    return (
      <div>
        <Card data-test="card-profile">
          <CardHeader title={profile.username} avatar={<Avatar icon={<AccountCircle />} />} />
          <CardText>
            <List>
              <ListItem
                primaryText={profile.username}
                leftIcon={<FaceIcon />}
                data-test="item-display-name"
              />
              <ListItem
                primaryText={profile.firstName}
                leftIcon={<PersonIcon />}
                data-test="item-first-name"
              />
              <ListItem
                primaryText={profile.lastName}
                leftIcon={<PersonOutlineIcon />}
                data-test="item-last-name"
              />
              <ListItem
                primaryText={profile.email}
                leftIcon={<EmailIcon />}
                data-test="item-email"
              />
            </List>
            <div>
              {!this.state.matchingProfile.exists
                ? <div>
                    <p>
                      Looking a little spare here, huh?
                    </p>
                    <p>
                      To get the most out of Montessori Match,
                    </p>
                    <RaisedButton
                      label="fill out your matching profile!"
                      primary={true}
                      onClick={this.handleFillProfileClick.bind(this)}
                    />
                  </div>
                : <div>
                    <List>
                      <Subheader>Matching Profile</Subheader>
                      <ListItem
                        primaryText={this.state.matchingProfile.ageRanges}
                        leftIcon={<FaceIcon />}
                      />
                      <ListItem
                        primaryText={this.state.matchingProfile.cals}
                        leftIcon={<DateIcon />}
                      />
                      <ListItem
                        primaryText={this.state.matchingProfile.orgType}
                        leftIcon={<PersonOutlineIcon />}
                      />
                      <ListItem
                        primaryText={this.state.matchingProfile.sizes}
                        leftIcon={<EmailIcon />}
                      />
                      <ListItem
                        primaryText={this.state.matchingProfile.states}
                        leftIcon={<EmailIcon />}
                      />
                      <ListItem
                        primaryText={this.state.matchingProfile.trainings}
                        leftIcon={<EmailIcon />}
                      />
                      <ListItem
                        primaryText={this.state.matchingProfile.traits}
                        leftIcon={<EmailIcon />}
                      />
                    </List>
                  </div>}
            </div>
          </CardText>
          <CardActions>
            <RaisedButton label="Edit" />
          </CardActions>
          <MatchProfileContainer open={this.state.open} />
        </Card>
      </div>
    );
  }
}

export default inject("currentUser")(observer(Profile));
