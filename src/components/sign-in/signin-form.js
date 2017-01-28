import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

export default class SignInForm extends React.Component {
    state = {
        openSignIn: this.props.openSignIn
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ openSignIn: nextProps.openSignIn });
    }

    handleClose = () => {
        this.setState({ openSignIn: false });
    };

    signIn = () => {
      console.log('sign in');
      setTimeout(function () {
          window.location = "#/profile"
      }, 1000);
      return this.handleClose();
    }

    render() {
      const actions = [
        <FlatButton
          label="Sign In"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
        />,
      ];

      return (
        <div>
        <MuiThemeProvider>
            <Dialog
              title="Sign In"
              actions={actions}
              modal={false}
              open={this.state.openSignIn}
              onRequestClose={this.handleClose}
            >
            Welcome!
               <div
                 style={styles.marginTop}
                 className="display-flex half-width text-left"
                >
                   <TextField
                     className="half-width"
                     hintText="Email"
                   />
                   <TextField
                     className="half-width"
                     hintText="Password"
                     type="password"
                   />
               </div>
             </Dialog>
          </MuiThemeProvider>
        </div>
      );
    }
}
