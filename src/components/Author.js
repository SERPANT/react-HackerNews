import React, { Component } from "react";

class Author extends Component {
  render() {
    return <div className={this.props.classType}> {this.props.by}</div>;
  }
}

export default Author;
