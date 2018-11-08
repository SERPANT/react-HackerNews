import React, { Component } from "react";
import { Link } from "react-router-dom";
class TabItem extends Component {
  render() {
    return (
      //<button className="tablinks">{this.props.text}</button>
      <Link className="tablinks" to={{ pathname: this.props.linkPath }}>
        {this.props.text}
      </Link>
    );
  }
}

export default TabItem;
