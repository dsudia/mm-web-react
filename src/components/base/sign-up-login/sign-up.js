import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RadioButton from 'material-ui/RadioButton';

const styles = {
  title : {
    textAlign: 'center'
  },
  dialogBox : {
    width: '70%',
    margin: 'auto',
    maxWidth: 'none',
  },
  marginTop : {
    marginTop: '2rem'
  },
  form: {
    display: 'flex',
    textAlign: 'left',
    width: '50%',
    margin: 'auto'
  }
}

export default class SignUp extends Component {
    state = {
      open: false,
    };

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };


  render() {
      let title = (this.props.signUp ? "Sign Up" : "Sign In");
      let message = (this.props.signUp ? "I am registering as a..." : "Welcome!");

      const actions = [
            <FlatButton
              label="Ok"
              primary={true}
              keyboardFocused={true}
              onTouchTap={this.handleClose}
            />,
          ];

          return (
            <div>
              <FlatButton label={title} onTouchTap={this.handleOpen} />
              <Dialog
                title={title}
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                {message}


            <div
              style={styles.marginTop}
              className="display-flex half-width text-left"
            >
                <RadioButton
                  value="Teacher"
                  label="Teacher"
                />
                <RadioButton
                  value="School"
                  label="School"
                />

            </div>

            <div style={styles.form}>

                <TextField
                  className="half-width"
                  hintText="First Name"
                />

                <TextField
                  className="half-width"
                  hintText="Last Name"
                />
            </div>

            <div style={styles.form}>
                <TextField
                  className="half-width"
                  hintText="Email"
                />

                <TextField
                  className="half-width"
                  hintText="Display Name"
                />
            </div>

            <div style={styles.form}>
                <TextField
                  className="half-width"
                  hintText="Password"
                  type="password"
                />

                <TextField
                  className="half-width"
                  hintText="Confirm Password"
                  type="password"
                />
            </div>

          </Dialog>
        </div>

      );
  }

}
