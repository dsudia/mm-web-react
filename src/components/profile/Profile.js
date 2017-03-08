import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import AccountCircle from "material-ui/svg-icons/action/account-circle";
import FaceIcon from "material-ui/svg-icons/action/face";
import BusinessIcon from "material-ui/svg-icons/communication/business";
import PersonIcon from "material-ui/svg-icons/social/person";
import ChildCareIcon from "material-ui/svg-icons/places/child-care";
import FingerprintIcon from "material-ui/svg-icons/action/fingerprint";
import ImportExportIcon
  from "material-ui/svg-icons/communication/import-export";
import DateIcon from "material-ui/svg-icons/action/date-range";
import CardMembershipIcon from "material-ui/svg-icons/action/card-membership";
import PersonOutlineIcon from "material-ui/svg-icons/social/person-outline";
import EmailIcon from "material-ui/svg-icons/communication/mail-outline";
import PlaceIcon from "material-ui/svg-icons/maps/place";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import {
  $ as MatchProfileContainer
} from "../match-profile/container/MatchProfCont";
import { $ as PotentialMatches } from "../potentialMatches/PotentialMatches";
import firebase from "firebase";
import { inject, observer } from "mobx-react";
import { browserHistory } from "react-router";
import Avatar from "material-ui/Avatar";
import * as mobx from "mobx";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    const user = firebase.auth().currentUser;
    if (!user) {
      browserHistory.push("/");
    }
  }

  updateIt() {
    this.forceUpdate();
  }

  render() {
    const translatedMatchingProfile = mobx.toJS(
      this.props.currentUser.translatedMatchingProfile
    );
    const profile = this.props.currentUser.profile;
    return (
      <div>
        <Card data-test="card-profile">
          <Subheader>My Profile</Subheader>
          <CardHeader
            title={profile.username}
            avatar={<Avatar icon={<AccountCircle />} />}
          />
          <CardText className="flex-container">
            <List className="flex-item">
              <Subheader>My Info</Subheader>
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
              {this.props.currentUser.profile.memberType === "teacher"
                ? <ListItem
                    primaryText={profile.lastName}
                    leftIcon={<PersonOutlineIcon />}
                    data-test="item-last-name"
                  />
                : null}
              <ListItem
                primaryText={profile.email}
                leftIcon={<EmailIcon />}
                data-test="item-email"
              />
            </List>
            <div>
              {!translatedMatchingProfile.ageRanges
                ? <div className="flex-item">
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
                    <List className="flex-item">
                      <Subheader>Matching Profile</Subheader>
                      <ListItem
                        primaryText={translatedMatchingProfile.ageRanges}
                        leftIcon={<ChildCareIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.cals}
                        leftIcon={<DateIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.orgType}
                        leftIcon={<BusinessIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.traits}
                        leftIcon={<FingerprintIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.trainings}
                        leftIcon={<CardMembershipIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.sizes}
                        leftIcon={<ImportExportIcon />}
                      />
                      <ListItem
                        primaryText={translatedMatchingProfile.states}
                        leftIcon={<PlaceIcon />}
                      />
                    </List>
                  </div>}
            </div>
            <PotentialMatches className="flex-item" />
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
