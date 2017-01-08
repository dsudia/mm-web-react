import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router'

export class MainMenu extends Component {
  static muiName = 'MainMenu';

  render() {
    return (
      <IconMenu
      {...this.props}
      iconButtonElement={
        <IconButton><MenuIcon color='#fff' /></IconButton>
      }
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    >
        <MenuItem primaryText='About'
        />
        <MenuItem primaryText='Legal'
            containerElement={<Link to="/legal" />}
        />
    </IconMenu>
    );
  }
}