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
          label="Cancel"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.props.menus.closeMatchProfCont}
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
        {this.props.currentUser.profile.memberType === "school"
          ? <MatchProfileStepperSchool />
          : <MatchProfileStepperTeacher
              updateProfile={this.props.updateProfile}
            />}
      </Dialog>
    );
  }
}

export const $ = inject("currentUser", "menus")(
  observer(MatchProfileContainer)
);
