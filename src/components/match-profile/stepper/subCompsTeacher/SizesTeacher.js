import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Checkbox from "material-ui/Checkbox";

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

export default class SizesTeacher extends Component {
  componentWillMount() {
    this.props.currentUser.updateMatchingProfile({
      sizes: [],
      sizesWgt: 10
    })
  }

  handle4OrLessChecked(event, isInputChecked) {
    if (isInputChecked) {
      this.props.currentUser.pushtoMatchProfileArray("sizes", 0)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("sizes", 0)
    }
  }

  handle5To9Checked(event, isInputChecked) {
    if (isInputChecked) {
      this.props.currentUser.pushtoMatchProfileArray("sizes", 1)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("sizes", 1)
    }
  }

  handle10To19Checked(event, isInputChecked) {
    if (isInputChecked) {
      this.props.currentUser.pushtoMatchProfileArray("sizes", 2)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("sizes", 2)
    }
  }

  handle20OrMoreChecked(event, isInputChecked) {
    if (isInputChecked) {
      this.props.currentUser.pushtoMatchProfileArray("sizes", 3)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("sizes", 3)
    }
  }

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="4 or less"
          style={styles.checkbox}
          onCheck={this.handle4OrLessChecked}
        />
        <Checkbox
          label="5 to 9"
          style={styles.checkbox}
          onCheck={this.handle5To9Checked}
        />
        <Checkbox
          label="10 to 19"
          style={styles.checkbox}
          onCheck={this.handle10To19Checked}
        />
        <Checkbox
          label="20 or more"
          style={styles.checkbox}
          onCheck={this.handle20OrMoreChecked}
        />
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(SizesTeacher));
