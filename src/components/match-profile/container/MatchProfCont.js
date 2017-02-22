import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import { $ as MatchProfileStepperSchool } from "../stepper/MatchProfStepSchool";
import { $ as MatchProfileStepperTeacher } from "../stepper/MatchProfStepTeacher";
import { inject, observer } from "mobx-react";

class MatchProfileContainer extends Component {
  state = {
    open: this.props.open
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      (
        <FlatButton
          label="Ok"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
        />
      )
    ];

    return (
      <Dialog
        title="Fill out your matching profile"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}
      >
        {this.props.currentUser.memberType === "school"
          ? <MatchProfileStepperSchool />
          : <MatchProfileStepperTeacher />}
      </Dialog>
    );
  }
}

export const $ = inject("currentUser")(observer(MatchProfileContainer));
