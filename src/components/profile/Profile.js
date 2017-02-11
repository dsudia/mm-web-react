import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List'
import TeacherImg from '../../assets/img/teacher.jpg'
import FaceIcon from 'material-ui/svg-icons/action/face';
import PersonIcon from 'material-ui/svg-icons/social/person'
import PersonOutlineIcon from 'material-ui/svg-icons/social/person-outline'
import EmailIcon from 'material-ui/svg-icons/communication/mail-outline'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MatchProfileContainer from '../match-profile/container/MatchProfCont'
import * as firebase from 'firebase'
import { getProfileData } from '../../databaseCalls/userCalls'
import { browserHistory } from 'react-router'

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            open: false
        }
    }

    componentWillMount() {
        const user = firebase.auth().currentUser
        if (user) {
            return getProfileData(user.uid, 'development')
            .then(data => {
                console.log(data.val())
                const userData = data.val()
                this.setState({
                    user: {
                        username: userData.displayName,
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: user.email
                    }
                })
            })
        } else {
            console.log('no user is signed in')
            browserHistory.push('/')
        }
    }

    handleFillProfileClick() {
        this.setState({open: true})
    }

    render() {
        return (
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
                    <p>
                        Looking a little spare here, huh?
                    </p>
                    <p>
                        To get the most out of Montessori Match,
                    </p>
                    <RaisedButton
                        label='fill out your matching profile!'
                        primary={true}
                        onClick={this.handleFillProfileClick.bind(this)}
                    />
                </CardText>
                <CardActions>
                    <RaisedButton label="Edit"/>
                </CardActions>
                <MatchProfileContainer open={this.state.open}/>
            </Card>
        );
    }
}
