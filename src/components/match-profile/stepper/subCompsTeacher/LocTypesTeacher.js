import React, { Component } from "react";
import Checkbox from "material-ui/Checkbox";
import { inject, observer } from "mobx-react";

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

export default class LocTypesTeacher extends Component {
  handleUrbChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("locTypes", 0);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("locTypes", 0);
    }
  };

  handleSubChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("locTypes", 1);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("locTypes", 1);
    }
  };

  handleSmaChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("locTypes", 2);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("locTypes", 2);
    }
  };

  handleRurChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("locTypes", 3);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("locTypes", 3);
    }
  };

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="Urban"
          style={styles.checkbox}
          onCheck={this.handleUrbChecked}
          checked={this.props.currentUser.matchingProfile.locTypes.includes(0)}
        />
        <Checkbox
          label="Suburban"
          style={styles.checkbox}
          onCheck={this.handleSubChecked}
          checked={this.props.currentUser.matchingProfile.locTypes.includes(1)}
        />
        <Checkbox
          label="Small City"
          style={styles.checkbox}
          onCheck={this.handleSmaChecked}
          checked={this.props.currentUser.matchingProfile.locTypes.includes(2)}
        />
        <Checkbox
          label="Rural"
          style={styles.checkbox}
          onCheck={this.handleRurChecked}
          checked={this.props.currentUser.matchingProfile.locTypes.includes(3)}
        />
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(LocTypesTeacher));
