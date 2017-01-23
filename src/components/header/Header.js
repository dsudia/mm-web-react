import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Logged, Login } from '../base/login/Login'
import { MainMenu } from '../base/main-menu/MainMenu'
import SignUpForm from '../base/sign-up-login/sign-up-form'
import AppBar from 'material-ui/AppBar'

class Header extends Component {
    state = {
        logged: false,
        open: false
    }

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    }

    handleOpenSignUp() {
      this.setState({openSignUp: true})
    }

    render() {


        return (
            <div>
              <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                  <AppBar
                      title='Montessori Match'
                      iconElementLeft={<MainMenu />}
                      iconElementRight={this.state.logged ? <Logged /> : <Login openSignUp={this.handleOpenSignUp.bind(this)} />}
                  />
              </MuiThemeProvider>
              <SignUpForm open={this.state.open} />
            </div>
        );
    }
}

export default Header;
