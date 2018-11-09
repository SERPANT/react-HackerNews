import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return <li className={this.props.classType}>{this.props.content}</li>;
  }
}

export default ListItem;
