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

export default class AgesSchool extends Component {
    constructor(props) {
        super(props)
        localStorage.setItem(`ageRanges`, JSON.stringify([]))
    }

    handle03Checked(event, isInputChecked) {
        if (isInputChecked) {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            ageRanges.push(0)
            localStorage.setItem(`ageRanges`, JSON.stringify(ageRanges))
        } else {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            const newRanges = ageRanges.filter((el) => {
                if (el !== 0) {
                    return el
                }
                return null
            })
            localStorage.setItem(`ageRanges`, JSON.stringify(newRanges))
        }
    }

    handle36Checked(event, isInputChecked) {
        if (isInputChecked) {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            ageRanges.push(1)
            localStorage.setItem(`ageRanges`, JSON.stringify(ageRanges))
        } else {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            const newRanges = ageRanges.filter((el) => {
                if (el !== 1) {
                    return el
                }
                return null
            })
            localStorage.setItem(`ageRanges`, JSON.stringify(newRanges))
        }
    }

    handle69Checked(event, isInputChecked) {
        if (isInputChecked) {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            ageRanges.push(2)
            localStorage.setItem(`ageRanges`, JSON.stringify(ageRanges))
        } else {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            const newRanges = ageRanges.filter((el) => {
                if (el !== 2) {
                    return el
                }
                return null
            })
            localStorage.setItem(`ageRanges`, JSON.stringify(newRanges))
        }
    }

    handle912Checked(event, isInputChecked) {
        if (isInputChecked) {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            ageRanges.push(3)
            localStorage.setItem(`ageRanges`, JSON.stringify(ageRanges))
        } else {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            const newRanges = ageRanges.filter((el) => {
                if (el !== 3) {
                    return el
                }
                return null
            })
            localStorage.setItem(`ageRanges`, JSON.stringify(newRanges))
        }
    }

    handle1215Checked(event, isInputChecked) {
        if (isInputChecked) {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            ageRanges.push(4)
            localStorage.setItem(`ageRanges`, JSON.stringify(ageRanges))
        } else {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            const newRanges = ageRanges.filter((el) => {
                if (el !== 4) {
                    return el
                }
                return null
            })
            localStorage.setItem(`ageRanges`, JSON.stringify(newRanges))
        }
    }

    handle1518Checked(event, isInputChecked) {
        if (isInputChecked) {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            ageRanges.push(5)
            localStorage.setItem(`ageRanges`, JSON.stringify(ageRanges))
        } else {
            const ageRanges = JSON.parse(localStorage.getItem(`ageRanges`))
            const newRanges = ageRanges.filter((el) => {
                if (el !== 5) {
                    return el
                }
                return null
            })
            localStorage.setItem(`ageRanges`, JSON.stringify(newRanges))
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
        )
    }
}
