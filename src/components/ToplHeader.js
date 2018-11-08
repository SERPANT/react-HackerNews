import React, { Component } from "react";
import { Link } from "react-router-dom";
class TopHeader extends Component {
  render() {
    return (
      <div>
        <Link to={{ pathname: "/" }}>
          {" "}
          <img src="images/hn2.jpg" className="page-icon" alt="icon" />
        </Link>
        <span className="page-Title"> HACKER NEWS</span>
      </div>
    );
  }
}

export default TopHeader;
