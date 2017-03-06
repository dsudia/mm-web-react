import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Subheader from 'material-ui/Subheader';
import AccountCircle from "material-ui/svg-icons/action/account-circle";
import FaceIcon from "material-ui/svg-icons/action/face";
import PersonIcon from "material-ui/svg-icons/social/person";
import DateIcon from "material-ui/svg-icons/action/date-range";
import PersonOutlineIcon from "material-ui/svg-icons/social/person-outline";
import EmailIcon from "material-ui/svg-icons/communication/mail-outline";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import {
  $ as MatchProfileContainer
} from "../match-profile/container/MatchProfCont";
import firebase from "firebase";
import { inject, observer } from "mobx-react";
import { browserHistory } from "react-router";
import Avatar from "material-ui/Avatar";
import * as mobx from "mobx";

class Profile extends Component {
  constructor(props) {
    super(props);
    const user = firebase.auth().currentUser;
    if (!user) {
      console.log("no user is signed in");
      browserHistory.push("/");
    }
  }

  updateIt() {
    console.log("update it got called")
    this.forceUpdate()
  }

  render() {
    const translatedMatchingProfile = mobx.toJS(
      this.props.currentUser.translatedMatchingProfile
    );
    const profile = this.props.currentUser.profile;
    return (
      <div>
        <Card data-test="card-profile">
          <CardHeader
            title={profile.username}
            avatar={<Avatar icon={<AccountCircle />} />}
          />
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
              {!translatedMatchingProfile.ageRanges.length > 0
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
                      onClick={this.props.menus.openMatchProfCont}
                    />
                  </div>
                : <div>
                    <List>
                      <Subheader>Matching Profile</Subheader>
                      <ListItem
                        primaryText={translatedMatchingProfile.ageRanges}
                        leftIcon={<FaceIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.cals}
                        leftIcon={<DateIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.orgType}
                        leftIcon={<PersonOutlineIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.traits}
                        leftIcon={<EmailIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.trainings}
                        leftIcon={<EmailIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.sizes}
                        leftIcon={<EmailIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.states}
                        leftIcon={<EmailIcon />}
                      />
                    </List>
                  </div>}
            </div>
          </CardText>
          <CardActions>
            <RaisedButton label="Edit" />
          </CardActions>
          <MatchProfileContainer updateProfile={this.updateIt.bind(this)} />
        </Card>
      </div>
    );
  }
}

export default inject("currentUser", "menus")(observer(Profile));
