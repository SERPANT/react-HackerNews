import React, { Component } from "react";

class Date extends Component {
  render() {
    return <div className={this.props.classType}>{this.props.date}</div>;
  }
}

export default Date;
