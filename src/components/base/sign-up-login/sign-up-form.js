import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
    textAlign: 'left'
  }
}

export default class SignUpForm extends Component {

    state = {
      open: false,
    };

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    componentWillReceiveProps(nextProps) {
      this.setState({open: nextProps.open})
    }

    render () {
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
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
               <Dialog
                 title="Sign Up"
                 titleStyle={styles.title}
                 contentStyle={styles.title}
                 actions={actions}
                 modal={true}
                 open={this.state.open}
                 onRequestClose={this.handleClose}
               >


                 "I am registering as a..."

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
       )

    }

}
