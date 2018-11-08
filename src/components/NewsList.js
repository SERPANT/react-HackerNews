import React, { Component } from "react";

class NewsList extends Component {
  render() {
    return (
      <div>
        <ul className="news-list">{this.props.displayPageContent}</ul>
      </div>
    );
  }
}

export default NewsList;
