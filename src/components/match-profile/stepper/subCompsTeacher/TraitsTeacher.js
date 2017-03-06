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
  handleAmbChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 0);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 0);
    }
  };

  handleHumChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 1);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 1);
    }
  };

  handleColChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 2);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 2);
    }
  };

  handleIndChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 3);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 3);
    }
  };

  handleExtChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 4);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 4);
    }
  };

  handleIntChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 5);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 5);
    }
  };

  handleArtChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 6);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 6);
    }
  };

  handleMusChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 7);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 7);
    }
  };

  handleCreChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 8);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 8);
    }
  };

  handleOrgChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 9);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 9);
    }
  };

  handlePlaChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 10);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 10);
    }
  };

  handleQuiChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 11);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 11);
    }
  };

  handleVerChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 12);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 12);
    }
  };

  handleWriChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 13);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 13);
    }
  };

  handleJoyChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 14);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 14);
    }
  };

  handleTecChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 15);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 15);
    }
  };

  handleAnaChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 16);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 16);
    }
  };

  handlePatChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 17);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 17);
    }
  };

  handleSpoChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 18);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 18);
    }
  };

  handleRouChecked = (event, isInputChecked) => {
    if (isInputChecked) {
      this.props.currentUser.pushToMatchProfileArray("traits", 19);
    } else {
      this.props.currentUser.removeFromMatchProfileArray("traits", 19);
    }
  };

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="Ambitious"
          style={styles.checkbox}
          onCheck={this.handleAmbChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(0)}
        />
        <Checkbox
          label="Humorous"
          style={styles.checkbox}
          onCheck={this.handleHumChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(1)}
        />
        <Checkbox
          label="Collaborative"
          style={styles.checkbox}
          onCheck={this.handleColhecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(2)}
        />
        <Checkbox
          label="Independent"
          style={styles.checkbox}
          onCheck={this.handleIndChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(3)}
        />
        <Checkbox
          label="Extroverted"
          style={styles.checkbox}
          onCheck={this.handleExtChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(4)}
        />
        <Checkbox
          label="Introverted"
          style={styles.checkbox}
          onCheck={this.handleIntChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(5)}
        />
        <Checkbox
          label="Artistic"
          style={styles.checkbox}
          onCheck={this.handleArtChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(6)}
        />
        <Checkbox
          label="Musical"
          style={styles.checkbox}
          onCheck={this.handleMusChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(7)}
        />
        <Checkbox
          label="Creative"
          style={styles.checkbox}
          onCheck={this.handleCreChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(8)}
        />
        <Checkbox
          label="Organized"
          style={styles.checkbox}
          onCheck={this.handleOrgChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(9)}
        />
        <Checkbox
          label="Playful"
          style={styles.checkbox}
          onCheck={this.handlePlaChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(10)}
        />
        <Checkbox
          label="Quiet"
          style={styles.checkbox}
          onCheck={this.handleQuiChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(11)}
        />
        <Checkbox
          label="Verbal Communicator"
          style={styles.checkbox}
          onCheck={this.handleVerChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(12)}
        />
        <Checkbox
          label="Written Communicator"
          style={styles.checkbox}
          onCheck={this.handleWriChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(13)}
        />
        <Checkbox
          label="Joyful"
          style={styles.checkbox}
          onCheck={this.handleJoyChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(14)}
        />
        <Checkbox
          label="Techie"
          style={styles.checkbox}
          onCheck={this.handleOTecChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(15)}
        />
        <Checkbox
          label="Analog"
          style={styles.checkbox}
          onCheck={this.handleAnaChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(16)}
        />
        <Checkbox
          label="Patient"
          style={styles.checkbox}
          onCheck={this.handlePatChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(17)}
        />
        <Checkbox
          label="Spontaneous"
          style={styles.checkbox}
          onCheck={this.handleSpoChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(18)}
        />
        <Checkbox
          label="Routine Oriented"
          style={styles.checkbox}
          onCheck={this.handleRouChecked}
          checked={this.props.currentUser.matchingProfile.traits.includes(19)}
        />
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(TraitsSchool));
