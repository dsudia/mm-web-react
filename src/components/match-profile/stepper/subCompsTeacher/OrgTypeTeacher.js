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

export default class OrgTypeTeacher extends Component {
    handlePubDistChecked = (event, isInputChecked) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray("orgTypes", 0);
        } else {
            this.props.currentUser.removeFromMatchProfileArray("orgTypes", 0);
        }
    };

    handlePubMagChecked = (event, isInputChecked) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray("orgTypes", 1);
        } else {
            this.props.currentUser.removeFromMatchProfileArray("orgTypes", 1);
        }
    };

    handlePubChartChecked = (event, isInputChecked) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray("orgTypes", 2);
        } else {
            this.props.currentUser.removeFromMatchProfileArray("orgTypes", 2);
        }
    };

    handlePubInnoChecked = (event, isInputChecked) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray("orgTypes", 3);
        } else {
            this.props.currentUser.removeFromMatchProfileArray("orgTypes", 3);
        }
    };

    handlePrivForSingleChecked = (event, isInputChecked) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray("orgTypes", 4);
        } else {
            this.props.currentUser.removeFromMatchProfileArray("orgTypes", 4);
        }
    };

    handlePrivForCorpChecked = (event, isInputChecked) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray("orgTypes", 5);
        } else {
            this.props.currentUser.removeFromMatchProfileArray("orgTypes", 5);
        }
    };

    handlePrivNonChecked = (event, isInputChecked) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray("orgTypes", 6);
        } else {
            this.props.currentUser.removeFromMatchProfileArray("orgTypes", 6);
        }
    };

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="Public District"
                    style={styles.checkbox}
                    onCheck={this.handlePubDistChecked}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(
                        0
                    )}
                />
                <Checkbox
                    label="Public Magnet"
                    style={styles.checkbox}
                    onCheck={this.handlePubMagChecked}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(
                        1
                    )}
                />
                <Checkbox
                    label="Public Charter"
                    style={styles.checkbox}
                    onCheck={this.handlePubChartChecked}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(
                        2
                    )}
                />
                <Checkbox
                    label="Public Innovation"
                    style={styles.checkbox}
                    onCheck={this.handlePubInnoChecked}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(
                        3
                    )}
                />
                <Checkbox
                    label="Private For-Profit, Single Owner"
                    style={styles.checkbox}
                    onCheck={this.handlePrivForSingleChecked}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(
                        4
                    )}
                />
                <Checkbox
                    label="Private For-Profit, Corporate Owner"
                    style={styles.checkbox}
                    onCheck={this.handlePrivForCorpChecked}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(
                        5
                    )}
                />
                <Checkbox
                    label="Private Non-Profit"
                    style={styles.checkbox}
                    onCheck={this.handlePrivNonChecked}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(
                        6
                    )}
                />
            </div>
        );
    }
}

export const $ = inject("currentUser")(observer(OrgTypeTeacher));
