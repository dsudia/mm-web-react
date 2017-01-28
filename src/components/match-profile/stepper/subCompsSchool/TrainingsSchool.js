import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class TrainingsSchool extends Component {
    constructor(props) {
        super(props)
        localStorage.setItem(`trainings`, JSON.stringify([]))
    }

    handleAMIChecked(event, isInputChecked) {
        if (isInputChecked) {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            trainings.push(0)
            localStorage.setItem(`trainings`, JSON.stringify(trainings))
        } else {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            const newRanges = trainings.filter((el) => {
                if (el !== 0) {
                    return el
                }
                return null
            })
            localStorage.setItem(`trainings`, JSON.stringify(newRanges))
        }
    }

    handleAMSChecked(event, isInputChecked) {
        if (isInputChecked) {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            trainings.push(1)
            localStorage.setItem(`trainings`, JSON.stringify(trainings))
        } else {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            const newRanges = trainings.filter((el) => {
                if (el !== 1) {
                    return el
                }
                return null
            })
            localStorage.setItem(`trainings`, JSON.stringify(newRanges))
        }
    }

    handleMCIChecked(event, isInputChecked) {
        if (isInputChecked) {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            trainings.push(2)
            localStorage.setItem(`trainings`, JSON.stringify(trainings))
        } else {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            const newRanges = trainings.filter((el) => {
                if (el !== 2) {
                    return el
                }
                return null
            })
            localStorage.setItem(`trainings`, JSON.stringify(newRanges))
        }
    }

    handleSNMChecked(event, isInputChecked) {
        if (isInputChecked) {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            trainings.push(3)
            localStorage.setItem(`trainings`, JSON.stringify(trainings))
        } else {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            const newRanges = trainings.filter((el) => {
                if (el !== 3) {
                    return el
                }
                return null
            })
            localStorage.setItem(`trainings`, JSON.stringify(newRanges))
        }
    }

    handleOtherChecked(event, isInputChecked) {
        if (isInputChecked) {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            trainings.push(4)
            localStorage.setItem(`trainings`, JSON.stringify(trainings))
        } else {
            const trainings = JSON.parse(localStorage.getItem(`trainings`))
            const newRanges = trainings.filter((el) => {
                if (el !== 4) {
                    return el
                }
                return null
            })
            localStorage.setItem(`trainings`, JSON.stringify(newRanges))
        }
    }

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
        )
    }
}
