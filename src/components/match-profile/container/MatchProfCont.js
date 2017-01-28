import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import MatchProfileStepperSchool from '../stepper/MatchProfStepSchool'

export default class MatchProfileContainer extends Component {
    state = {
        open: this.props.open
    };

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.open});
    }

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
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
                <MatchProfileStepperSchool />
            </Dialog>
        )

    }
}
