import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Step, Stepper, StepContent, StepLabel } from "material-ui/Stepper";
import OrgTypeSchool from "./subComps/OrgTypeSchool";
import CalsSchool from "./subComps/CalsSchool";
import StatesSchool from "./subComps/StatesSchool";

export default class MatchProfileStepperSchool extends Component {
  state = {
    finished: false,
    stepIndex: 0,
    orgTypes: [],
    orgTypesWgt: 0,
    cals: [],
    calsWgt: 0,
    states: [],
    statesWgt: 0,
    sizes: [],
    sizesWgt: 0,
    locTypes: [],
    locTypesWgt: 0,
    ageRanges: [],
    ageRangesWgt: 0,
    traits: [],
    traitsWgt: 0,
    trainings: [],
    trainingsWgt: 0
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 8
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={stepIndex === 8 ? "Finish" : "Next"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{ marginRight: 12 }}
        />
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
  }

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
                How big is your school?
              </p>
              <StatesSchool />
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Age Ranges</StepLabel>
            <StepContent>
              <p>
                What age bands do you teach?
              </p>
              <StatesSchool />
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Teacher Training</StepLabel>
            <StepContent>
              <p>
                What teacher training standards do you accept?
              </p>
              <StatesSchool />
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Culture</StepLabel>
            <StepContent>
              <p>
                Pick seven traits that describe your school culture
              </p>
              <StatesSchool />
              {this.renderStepActions(4)}
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
              }}
            >
              Click here
            </a> to reset the example.
          </p>}
      </div>
    );
  }
}
