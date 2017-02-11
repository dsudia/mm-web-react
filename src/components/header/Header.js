import React, { Component } from 'react';
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
            <AppBar
                title='Montessori Match'
                iconElementLeft={<MainMenu/>}
                iconElementRight={this.state.logged ? <Logged/> : <Login/>}
            />
        );
    }
}

export default Header;
