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

class CalsTeacher extends Component {
  componentWillMount() {
    this.props.currentUser.updateMatchingProfile({
      cals: [],
      calsWgt: 10
    })
  }

  handleTraditionalChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("cals", 0)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("cals", 0)
    }
  }

  handleYearRoundChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("cals", 1)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("cals", 1)
    }
  }

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="Traditional"
          style={styles.checkbox}
          onCheck={this.handleTraditionalChecked}
        />
        <Checkbox
          label="Year-Round"
          style={styles.checkbox}
          onCheck={this.handleYearRoundChecked}
        />
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(CalsTeacher));
