import React, { Component } from "react";
import Header from "../header/Header";
import { getCurrentUser } from '../../redux/actions/get-current-user'
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetCurrentUser: () => dispatch(getCurrentUser()),
  };
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
