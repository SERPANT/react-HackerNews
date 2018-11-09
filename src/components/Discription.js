import React, { Component } from "react";

class Discription extends Component {
  render() {
    return <div className={this.props.classType}>{this.props.text}</div>;
  }
}

export default Discription;
