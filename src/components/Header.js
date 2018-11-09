import NavBar from "./NavBar";
import TopHeader from "./ToplHeader";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <TopHeader />
        <NavBar />
      </div>
    );
  }
}

export default Header;
