import React, { Component } from "react";

class TabItem extends Component {
  clickHandler() {
    this.props.tabChange(this.props.text);
  }

  render() {
    return (
      <button className="tablinks" onClick={this.clickHandler.bind(this)}>
        {this.props.text}
      </button>
    );
  }
}

export default TabItem;
