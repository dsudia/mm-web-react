import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import { inject, observer } from "mobx-react";
import {
  getPotentialMatches,
  getUserNameFromId
} from "../../databaseCalls/userCalls";
import Promise from "bluebird";

class PotentialMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      potentialMatchesWithUserNames: []
    };
  }

  componentWillMount() {
    return getPotentialMatches(
      this.props.currentUser.id,
      this.props.currentUser.matchingProfile.uuid
    ).then(data => {
      const dataValue = data.val();
      const potentialMatchesList = Object.keys(dataValue).map(
        key => dataValue[key]
      );
      return Promise.map(potentialMatchesList, pm => {
        return getUserNameFromId(pm.userId).then(userName => {
          pm.userName = userName;
          return pm;
        });
      }).then(potentialMatchesWithUserNames => {
        this.setState({
          potentialMatchesWithUserNames
        });
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <List>
        <Subheader>Your Potential Matches</Subheader>
        {this.state.potentialMatchesWithUserNames.map(potentialMatch => {
          const random = Math.random();
          return (
            <div key={random}>
              <ListItem
                primaryText={potentialMatch.userName}
                secondaryText={`Match percent: ${potentialMatch.matchPercent}`}
              />
              <Divider />
            </div>
          );
        })}
      </List>
    );
  }
}

export const $ = inject("currentUser")(observer(PotentialMatches));
