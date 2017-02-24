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

export default class TraitsSchool extends Component {
  componentWillMount() {
    this.props.currentUser.updateMatchingProfile({
      traits: [],
      traitsWgt: 10
    })
  }

  handleAmbChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 0)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 0)
    }
  }

  handleHumChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 1)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 1)
    }
  }

  handleColChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 2)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 2)
    }
  }

  handleIndChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 3)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 3)
    }
  }

  handleExtChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 4)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 4)
    }
  }

  handleIntChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 5)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 5)
    }
  }

  handleArtChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 6)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 6)
    }
  }

  handleMusChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 7)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 7)
    }
  }

  handleCreChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 8)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 8)
    }
  }

  handleOrgChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 9)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 9)
    }
  }

  handlePlaChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 10)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 10)
    }
  }

  handleQuiChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 11)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 11)
    }
  }

  handleVerChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 12)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 12)
    }
  }

  handleWriChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 13)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 13)
    }
  }

  handleJoyChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 14)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 14)
    }
  }

  handleTecChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 15)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 15)
    }
  }

  handleAnaChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 16)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 16)
    }
  }

  handlePatChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 17)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 17)
    }
  }

  handleSpoChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 18)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 18)
    }
  }

  handleRouChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 19)
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 19)
    }
  }

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="Ambitious"
          style={styles.checkbox}
          onCheck={this.handleAmbChecked}
        />
        <Checkbox
          label="Humorous"
          style={styles.checkbox}
          onCheck={this.handleHumChecked}
        />
        <Checkbox
          label="Collaborative"
          style={styles.checkbox}
          onCheck={this.handleColhecked}
        />
        <Checkbox
          label="Independent"
          style={styles.checkbox}
          onCheck={this.handleIndChecked}
        />
        <Checkbox
          label="Extroverted"
          style={styles.checkbox}
          onCheck={this.handleExtChecked}
        />
        <Checkbox
          label="Introverted"
          style={styles.checkbox}
          onCheck={this.handleIntChecked}
        />
        <Checkbox
          label="Artistic"
          style={styles.checkbox}
          onCheck={this.handleArtChecked}
        />
        <Checkbox
          label="Musical"
          style={styles.checkbox}
          onCheck={this.handleMusChecked}
        />
        <Checkbox
          label="Creative"
          style={styles.checkbox}
          onCheck={this.handleCreChecked}
        />
        <Checkbox
          label="Organized"
          style={styles.checkbox}
          onCheck={this.handleOrgChecked}
        />
        <Checkbox
          label="Playful"
          style={styles.checkbox}
          onCheck={this.handlePlaChecked}
        />
        <Checkbox
          label="Quiet"
          style={styles.checkbox}
          onCheck={this.handleQuiChecked}
        />
        <Checkbox
          label="Verbal Communicator"
          style={styles.checkbox}
          onCheck={this.handleVerChecked}
        />
        <Checkbox
          label="Written Communicator"
          style={styles.checkbox}
          onCheck={this.handleWriChecked}
        />
        <Checkbox
          label="Joyful"
          style={styles.checkbox}
          onCheck={this.handleJoyChecked}
        />
        <Checkbox
          label="Techie"
          style={styles.checkbox}
          onCheck={this.handleOTecChecked}
        />
        <Checkbox
          label="Analog"
          style={styles.checkbox}
          onCheck={this.handleAnaChecked}
        />
        <Checkbox
          label="Patient"
          style={styles.checkbox}
          onCheck={this.handlePatChecked}
        />
        <Checkbox
          label="Spontaneous"
          style={styles.checkbox}
          onCheck={this.handleSpoChecked}
        />
        <Checkbox
          label="Routine Oriented"
          style={styles.checkbox}
          onCheck={this.handleRouChecked}
        />
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(TraitsSchool));
