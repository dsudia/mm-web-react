import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router'
import FaceIcon from 'material-ui/svg-icons/action/face';
import RegisterForm from '../../register/register-form.js';
import SignInForm from '../../sign-in/signin-form.js';

export class Login extends Component {
  static muiName = 'Login';

  constructor(props) {
      super(props)
      this.state = {
          open: false
      }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  render() {
    return (
      <div>
        <IconMenu
          {...this.props}
          iconButtonElement={
            <IconButton><FaceIcon color='#fff' /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem>
          <FlatButton label="Register" onTouchTap={this.handleOpen.bind(this)} />
        </MenuItem>
        <MenuItem>
          <FlatButton label="Sign In" onTouchTap={this.handleOpen.bind(this)} />
        </MenuItem>
        <MenuItem primaryText="Sign In"
          containerElement={<Link to="/profile" />}
        />
      </IconMenu>
    <SignInForm open={this.state.open} />
    <RegisterForm open={this.state.open} />
    </div>
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
