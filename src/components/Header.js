import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to={{ pathname: "/" }}>
          {" "}
          <img src="images/hn2.jpg" className="page-icon" />
        </Link>
        <span className="page-Title"> HACKER NEWS</span>
      </div>
    );
  }
}

export default Header;
