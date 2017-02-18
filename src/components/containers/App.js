import React, { Component } from "react";
import Header from "../header/Header";
import { getCurrentUser } from "../../redux/actions/get-current-user";
import { connect } from "react-redux";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
