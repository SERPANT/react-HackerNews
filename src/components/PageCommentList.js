import React, { Component } from "react";

class PageCommentList extends Component {
  render() {
    return (
      <div className="comment-list-container">
        <ul className="comment-list">{this.props.kids}</ul>
      </div>
    );
  }
}

export default PageCommentList;
