import Date from "./Date";
import Icon from "./Icon";
import Author from "./Author";
import Discription from "./Discription";
import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="comment clearfix">
        <div className="comment-icon-container">
          <Icon
            ImageClassType="comment-icon"
            location="../images/ommentIcon2.jpg"
            alternate="comment Icon"
          />
        </div>

        <div className="comment-detail-container">
          <h3>
            <Author by={this.props.by} classType="comment-author" />
          </h3>
          <Date date={this.props.commentDate} classType="comment-date" />
          <Discription text={this.props.text} classType="comment-discription" />
        </div>
      </div>
    );
  }
}

export default Comment;
