import React, { Component } from "react";
import TopHeader from "./ToplHeader";
import NavBar from "./NavBar";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <TopHeader />
        <NavBar tabChange={this.props.tabChange} />
      </div>
    );
  }
}

export default Header;
