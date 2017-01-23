import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// import { Link } from 'react-router'
import FaceIcon from 'material-ui/svg-icons/action/face';
import SignUp from '../sign-up-login/sign-up';
// import SignIn from '../sign-up-login/sign-in';

export class Login extends Component {
  static muiName = 'Login';

  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <IconButton><FaceIcon color='#fff' /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >

      <MenuItem containerElement={<SignUp openSignUp={this.props.openSignUp} />} />

    </IconMenu>
    );
  }
}

export class Logged extends Component {
  static muiName = 'Logged';

  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <IconButton><FaceIcon color='#fff' /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    )
  }
}

// <MenuItem primaryText="Sign Up" />
// <MenuItem primaryText="Sign In"
//   containerElement={<Link to="/profile" />}
// />
