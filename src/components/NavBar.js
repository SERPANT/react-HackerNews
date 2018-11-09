import TabItem from "./TabItem";
import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.tabItem = [
      { text: "Top Stories", path: "/" },
      { text: "Ask HN Stories", path: "/AskHNStories" },
      { text: "Job HN Stories", path: "/JobHNStories" }
    ];
  }

  render() {
    let tabList = this.tabItem.map((tabitem, index) => {
      return (
        <TabItem text={tabitem.text} linkPath={tabitem.path} key={index} />
      );
    });
    return (
      <div className="nav-bar">
        <div className="tab">{tabList}</div>
      </div>
    );
  }
}

export default NavBar;
