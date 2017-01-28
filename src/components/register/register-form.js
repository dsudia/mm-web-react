import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RadioButton from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

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
    textAlign: 'left'
  }
}

export default class RegisterForm extends React.Component {
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
        <FlatButton
          label="Ok"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
        />,
      ];

      return (
        <div>
        <MuiThemeProvider>
            <Dialog
              title="Sign Up"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
            I'm signing up as a...

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
          </MuiThemeProvider>
        </div>
      );
    }
}
