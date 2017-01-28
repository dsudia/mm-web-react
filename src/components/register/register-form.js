import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
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
        isTeacher: 0,
        open: this.props.open,
        firstname: '',
        lastname: '',
        email: '',
        displayName: '',
        password: '',
        confirmPassword: '',
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open });
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    createNewUser = () => {
      // console.log("register!")
      // setTimeout(function () {
      //     window.location = "/profile"
      // }, 1000);
      return this.handleClose();
    }

    render() {
      const actions = [
        <FlatButton
          label="Register"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.createNewUser}
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
              onRequestClose={this.createNewUser}
              containerElement={<Link to="/profile" />}
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
