import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Logged, Login } from '../base/login/Login'
import { MainMenu } from '../base/main-menu/MainMenu'
import AppBar from 'material-ui/AppBar'

class Header extends Component {
    state = {
        logged: false
    }

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <AppBar
                    title='Montessori Match'
                    iconElementLeft={<MainMenu/>}
                    iconElementRight={this.state.logged ? <Logged/> : <Login/>}
                />
            </MuiThemeProvider>
        );
    }
}

export default Header;
