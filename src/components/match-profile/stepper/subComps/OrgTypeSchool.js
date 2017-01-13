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

export default class OrgTypeSchool extends Component {
    handleOnChange(event, value) {
        localStorage.setItem(`orgType`, value)
    }

    render() {
        return (
            <RadioButtonGroup name="orgTypes" onChange={this.handleOnChange}>
                <RadioButton
                    value={0}
                    label="Public District"
                    style={styles.radioButton}
                />
                <RadioButton
                    value={1}
                    label="Public Magnet"
                    style={styles.radioButton}
                />
                <RadioButton
                    value={2}
                    label="Public Charter"
                    style={styles.radioButton}
                />
                <RadioButton
                    value={3}
                    label="Public Innovation"
                    style={styles.radioButton}
                />
                <RadioButton
                    value={4}
                    label="Private For-Profit, Single Owner"
                    style={styles.radioButton}
                />
                <RadioButton
                    value={5}
                    label="Private For-Profit, Corporate Owner"
                    style={styles.radioButton}
                />
                <RadioButton
                    value={6}
                    label="Private Non-Profit"
                    style={styles.radioButton}
                />
            </RadioButtonGroup>
        )
    }
}