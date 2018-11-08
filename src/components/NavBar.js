import React, { Component } from "react";
import TabItem from "./TabItem";
class NavBar extends Component {
  changeTabHandler(newTab) {
    this.props.tabChange(newTab);
  }
  render() {
    return (
      <div className="nav-bar">
        <div className="tab">
          <TabItem
            text="Top Stories"
            tabChange={this.changeTabHandler.bind(this)}
          />
          <TabItem
            text="Ask HN Stories"
            tabChange={this.changeTabHandler.bind(this)}
          />
          <TabItem
            text="Job HN Stories"
            tabChange={this.changeTabHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
