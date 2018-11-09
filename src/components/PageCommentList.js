import React, { Component } from "react";

class PageCommentList extends Component {
  render() {
    let ulClassName;
    if (this.props.noComment) {
      ulClassName = "comment-list" + " no-comment";
    } else {
      ulClassName = "comment-list";
    }
    return (
      <div className="comment-list-container">
        <ul className={ulClassName}>{this.props.kids}</ul>
      </div>
    );
  }
}

export default PageCommentList;
