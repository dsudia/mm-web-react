import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Step, Stepper, StepContent, StepLabel } from "material-ui/Stepper";
import { $ as OrgTypeSchool } from "./subCompsSchool/OrgTypeSchool";
import { $ as CalsSchool } from "./subCompsSchool/CalsSchool";
import { $ as StatesSchool } from "./subCompsSchool/StatesSchool";
import { $ as SizesSchool } from "./subCompsSchool/SizesSchool";
import { $ as AgesSchool } from "./subCompsSchool/AgesSchool";
import { $ as TrainingsSchool } from "./subCompsSchool/TrainingsSchool";
import { $ as TraitsSchool } from "./subCompsSchool/TraitsSchool";
import { inject, observer } from "mobx-react";
import { writeMatchProfile } from "../../../databaseCalls/userCalls";
import * as translators from "../../profile/translators";
import * as mobx from "mobx";

class MatchProfileStepperSchool extends Component {
  state = {
    finished: false,
    stepIndex: 0
  };

  translateMatchingProfile() {
    const translatedMatchingProfile = {
      exists: true,
      ageRanges: translators.translateAgeRanges(
        this.props.currentUser.matchingProfile.ageRanges
      ),
      cals: translators.translateCals(
        this.props.currentUser.matchingProfile.cals
      ),
      orgType: translators.translateOrgTypes(
        this.props.currentUser.matchingProfile.orgTypes
      ),
      sizes: translators.translateSizes(
        this.props.currentUser.matchingProfile.sizes
      ),
      states: translators.translateStates(
        this.props.currentUser.matchingProfile.states
      ),
      trainings: translators.translateTrainings(
        this.props.currentUser.matchingProfile.trainings
      ),
      traits: translators.translateTraits(
        this.props.currentUser.matchingProfile.traits
      )
    };
    return translatedMatchingProfile;
  }

  handleFinish = () => {
    const user = mobx.toJS(this.props.currentUser);
    writeMatchProfile(user.id, user.matchingProfile, user.profile.memberType);
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 7
    });
    this.props.currentUser.setMatchingProfile(user.matchingProfile);
    const exists = this.props.currentUser.matchingProfile.ageRanges !==
      undefined;
    if (exists) {
      this.props.currentUser.setTranslatedMatchingProfile(
        this.translateMatchingProfile()
      );
    }
    this.props.menus.closeMatchProfCont();
    this.props.updateProfile();
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 7
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions = step => {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        {stepIndex === 7
          ? <RaisedButton
              label={"Finish"}
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              onTouchTap={this.handleFinish}
              style={{ marginRight: 12 }}
            />
          : <RaisedButton
              label={"Next"}
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              onTouchTap={this.handleNext}
              style={{ marginRight: 12 }}
            />}
        {step > 0 &&
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />}
      </div>
    );
  };

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <div style={{ maxWidth: 380, maxHeight: 800, margin: "auto" }}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Your Matching Profile</StepLabel>
            <StepContent>
              The power of Montessori Match is finding teachers that will be
              great cultural fits for your school. Fill out this quick
              profile and we can start getting you matched up!
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Type of School</StepLabel>
            <StepContent>
              <p>
                What category best matches your school?
              </p>
              <OrgTypeSchool />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Calendar</StepLabel>
            <StepContent>
              <p>
                What calendar does your school use?
              </p>
              <CalsSchool />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>State</StepLabel>
            <StepContent>
              <p>
                What state is your school in?
              </p>
              <StatesSchool />
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Size</StepLabel>
            <StepContent>
              <p>
                How many classrooms does your school have?
              </p>
              <SizesSchool />
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Age Ranges</StepLabel>
            <StepContent>
              <p>
                What age bands do you teach?
              </p>
              <AgesSchool />
              {this.renderStepActions(5)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Teacher Training</StepLabel>
            <StepContent>
              <p>
                What teacher training standards do you accept?
              </p>
              <TrainingsSchool />
              {this.renderStepActions(6)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Culture</StepLabel>
            <StepContent>
              <p>
                Pick seven traits that describe your school culture. (We know you are all of these things!)
              </p>
              <TraitsSchool />
              {this.renderStepActions(7)}
            </StepContent>
          </Step>
        </Stepper>
        {finished &&
          <p style={{ margin: "20px 0", textAlign: "center" }}>
            <a
              href="#"
              onClick={event => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
                writeMatchProfile(
                  this.props.currentUser.id,
                  this.props.currentUser.matchingProfile
                );
              }}
            >
              Click here
            </a> to submit your matching profile!
          </p>}
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(MatchProfileStepperSchool));
