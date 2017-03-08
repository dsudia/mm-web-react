import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Step, Stepper, StepContent, StepLabel } from "material-ui/Stepper";
import { $ as OrgTypeTeacher } from "./subCompsTeacher/OrgTypeTeacher";
import { $ as CalsTeacher } from "./subCompsTeacher/CalsTeacher";
import { $ as StatesTeacher } from "./subCompsTeacher/StatesTeacher";
import { $ as SizesTeacher } from "./subCompsTeacher/SizesTeacher";
import { $ as AgesTeacher } from "./subCompsTeacher/AgesTeacher";
import { $ as TrainingsTeacher } from "./subCompsTeacher/TrainingsTeacher";
import { $ as TraitsTeacher } from "./subCompsTeacher/TraitsTeacher";
import { $ as LocTypesTeacher } from "./subCompsTeacher/LocTypesTeacher";
import { $ as EdTypesTeacher } from "./subCompsTeacher/EdTypesTeacher";
import { writeMatchProfile } from "../../../databaseCalls/userCalls";
import { inject, observer } from "mobx-react";
import * as mobx from "mobx";
import * as translators from "../../profile/translators";
import { v4 } from "uuid";
import {
    runMatchComparison
} from "../../../databaseCalls/matchCompare/compare";

export default class MatchProfileStepperTeacher extends Component {
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
            orgTypes: translators.translateOrgTypes(
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
            ),
            locTypes: translators.translateLoctypes(
                this.props.currentUser.matchingProfile.locTypes
            ),
            edTypes: translators.translateEdTypes(
                this.props.currentUser.matchingProfile.edTypes
            )
        };
        return translatedMatchingProfile;
    }

    handleFinish = () => {
        const uid = v4();
        const user = mobx.toJS(this.props.currentUser);
        const matchingProfile = user.matchingProfile;
        matchingProfile.memberType = user.profile.memberType;
        writeMatchProfile(
            user.id,
            matchingProfile,
            user.profile.memberType,
            uid
        );
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 9
        });
        this.props.currentUser.setMatchingProfile(user.matchingProfile);
        const exists = this.props.currentUser.matchingProfile.ageRanges !==
            undefined;
        if (exists) {
            this.props.currentUser.setTranslatedMatchingProfile(
                this.translateMatchingProfile()
            );
        }
        runMatchComparison(
            this.props.currentUser.id,
            this.props.currentUser.profile.memberType
        );
        this.props.menus.closeMatchProfCont();
        this.props.updateProfile();
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 9
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
                {stepIndex === 9
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
                            The power of Montessori Match is finding schools that will be


                            great cultural fits for you. Fill out this quick
                            profile and we can start getting you matched up!
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Types of School</StepLabel>
                        <StepContent>
                            <p>
                                What kinds of school would you like to work at?
                            </p>
                            <OrgTypeTeacher />
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Calendars</StepLabel>
                        <StepContent>
                            <p>
                                What calendar are you willing to work on?
                            </p>
                            <CalsTeacher />
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>States</StepLabel>
                        <StepContent>
                            <p>
                                What states would you like to work in?
                            </p>
                            <StatesTeacher />
                            {this.renderStepActions(3)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Location</StepLabel>
                        <StepContent>
                            <p>
                                What kind of area is your idea school in?
                            </p>
                            <LocTypesTeacher />
                            {this.renderStepActions(4)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Size</StepLabel>
                        <StepContent>
                            <p>
                                How many classrooms does your ideal school have?
                            </p>
                            <SizesTeacher />
                            {this.renderStepActions(5)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Age Ranges</StepLabel>
                        <StepContent>
                            <p>
                                What age bands are you licensed to teach?
                            </p>
                            <AgesTeacher />
                            {this.renderStepActions(6)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Teacher Training</StepLabel>
                        <StepContent>
                            <p>
                                What training certifications do you have?
                            </p>
                            <TrainingsTeacher />
                            {this.renderStepActions(7)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Education</StepLabel>
                        <StepContent>
                            <p>
                                What is your highest level of education?
                            </p>
                            <EdTypesTeacher />
                            {this.renderStepActions(8)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Culture</StepLabel>
                        <StepContent>
                            <p>
                                Pick seven traits that describe your ideal school culture. (We know you are all of these things!)
                            </p>
                            <TraitsTeacher />
                            {this.renderStepActions(9)}
                        </StepContent>
                    </Step>
                </Stepper>
                {finished &&
                    <p style={{ margin: "20px 0", textAlign: "center" }}>
                        <a
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                this.setState({
                                    stepIndex: 0,
                                    finished: false
                                });
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

export const $ = inject("currentUser", "menus")(
    observer(MatchProfileStepperTeacher)
);
