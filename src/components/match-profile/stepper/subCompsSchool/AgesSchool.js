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

class AgesSchool extends Component {
  componentWillMount() {
    this.props.currentUser.updateMatchingProfile({
      ageRanges: [],
      agesWgt: 10
    })
  }
  handle03Checked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("ageRanges", 0)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("ageRanges", 0)
    }
  }

  handle36Checked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("ageRanges", 1)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("ageRanges", 1)
    }
  }

  handle69Checked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("ageRanges", 2)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("ageRanges", 2)
    }
  }

  handle912Checked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("ageRanges", 3)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("ageRanges", 3)
    }
  }

  handle1215Checked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("ageRanges", 4)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("ageRanges", 4)
    }
  }

  handle1518Checked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("ageRanges", 5)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("ageRanges", 5)
    }
  }

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="0 to 3"
          style={styles.checkbox}
          onCheck={this.handle03Checked}
        />
        <Checkbox
          label="3 to 6"
          style={styles.checkbox}
          onCheck={this.handle36Checked}
        />
        <Checkbox
          label="6 to 9"
          style={styles.checkbox}
          onCheck={this.handle69Checked}
        />
        <Checkbox
          label="9 to 12"
          style={styles.checkbox}
          onCheck={this.handle912Checked}
        />
        <Checkbox
          label="12 to 15"
          style={styles.checkbox}
          onCheck={this.handle1215Checked}
        />
        <Checkbox
          label="15 to 18"
          style={styles.checkbox}
          onCheck={this.handle1518Checked}
        />
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(AgesSchool));
