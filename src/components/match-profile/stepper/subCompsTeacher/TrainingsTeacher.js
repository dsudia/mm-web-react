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

export default class TrainingsTeacher extends Component {
  componentWillMount() {
    this.props.currentUser.updateMatchingProfile({
      trainings: [],
      trainingsWgt: 10
    });
  }

  handleAMIChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("trainings", 0);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("trainings", 0);
    }
  };

  handleAMSChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("trainings", 1);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("trainings", 1);
    }
  };

  handleMCIChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("trainings", 2);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("trainings", 2);
    }
  };

  handleSNMChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("trainings", 3);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("trainings", 3);
    }
  };

  handleOtherChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("trainings", 4);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("trainings", 4);
    }
  };

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="AMI"
          style={styles.checkbox}
          onCheck={this.handleAMIChecked}
        />
        <Checkbox
          label="AMS"
          style={styles.checkbox}
          onCheck={this.handleAMSChecked}
        />
        <Checkbox
          label="MCI"
          style={styles.checkbox}
          onCheck={this.handleMCIChecked}
        />
        <Checkbox
          label="SNM"
          style={styles.checkbox}
          onCheck={this.handleSNMChecked}
        />
        <Checkbox
          label="Other"
          style={styles.checkbox}
          onCheck={this.handleOtherChecked}
        />
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(TrainingsTeacher));
