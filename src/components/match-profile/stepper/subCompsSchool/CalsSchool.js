import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export default class CalsSchool extends Component {
    handleOnChange(event, value) {
        localStorage.setItem(`cals`, value)
    }

    render() {
        return (
            <RadioButtonGroup name="cals" onChange={this.handleOnChange}>
                <RadioButton
                    value={0}
                    label="Traditional"
                    style={styles.radioButton}
                />
                <RadioButton
                    value={1}
                    label="Year-Round"
                    style={styles.radioButton}
                />
            </RadioButtonGroup>
        )
    }
}