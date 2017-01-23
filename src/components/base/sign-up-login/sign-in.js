import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';


export default class SignIn extends Component {



  render() {
          return (
            <div>
              <FlatButton label={this.props.title} onTouchTap={this.props.open} />
        </div>

      );
  }

}
