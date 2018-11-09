import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <img
        src={this.props.location}
        alt={this.props.alternate}
        className={this.props.ImageClassType}
      />
    );
  }
}

export default Icon;
