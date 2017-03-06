import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import { $ as MatchProfileStepperSchool } from "../stepper/MatchProfStepSchool";
import {
  $ as MatchProfileStepperTeacher
} from "../stepper/MatchProfStepTeacher";
import { inject, observer } from "mobx-react";

class MatchProfileContainer extends Component {
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
        open={this.props.menus.matchProfContIsOpen}
        onRequestClose={this.props.menus.closeMatchProfCont}
        autoScrollBodyContent={true}
      >
        {this.props.currentUser.memberType === "school"
          ? <MatchProfileStepperSchool />
          : <MatchProfileStepperTeacher />}
      </Dialog>
    );
  }
}

export const $ = inject("currentUser", "menus")(
  observer(MatchProfileContainer)
);
