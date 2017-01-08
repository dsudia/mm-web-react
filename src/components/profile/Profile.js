import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { List, ListItem } from 'material-ui/List'
import TeacherImg from '../../assets/img/teacher.jpg'
import FaceIcon from 'material-ui/svg-icons/action/face';
import PersonIcon from 'material-ui/svg-icons/social/person'
import PersonOutlineIcon from 'material-ui/svg-icons/social/person-outline'
import EmailIcon from 'material-ui/svg-icons/communication/mail-outline'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Profile extends Component {

    constructor(props) {
        const userData = {username: 'fred', firstName: 'fred', lastName: 'smith', email: 'fred@gmail.com'}
        super(props)
        this.state = {user: userData}
        // JSON.parse(localStorage.getItem('userData')) || 
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Card>
                    <CardHeader
                        title={this.state.user.username}
                        avatar={TeacherImg}
                    />
                    <CardText>
                        <List>
                            <ListItem primaryText={this.state.user.username} leftIcon={<FaceIcon />} />
                            <ListItem primaryText={this.state.user.firstName} leftIcon={<PersonIcon />} />
                            <ListItem primaryText={this.state.user.lastName} leftIcon={<PersonOutlineIcon />} />
                            <ListItem primaryText={this.state.user.email} leftIcon={<EmailIcon />} />
                        </List>
                    </CardText>
                    <CardActions>
                        <FlatButton label="Edit"/>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}
