import Date from "./Date";
import Icon from "./Icon";
import Author from "./Author";
import Discription from "./Discription";
import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.commentChildren = [];
  }

  render() {
    if (this.props.kids != undefined) {
      this.commentChildren = this.props.subCommentList.map(commentObject => {
        if (this.props.id == commentObject.parent) {
          let commentDate = null;
          if (this.props.convert != undefined) {
            commentDate = this.props.convert(commentObject.time);
          }

          //  console.log(commentObject.time);
          let child = (
            <Comment
              key={commentObject.id}
              by={commentObject.by}
              text={commentObject.text}
              commentDate={commentDate}
              id={commentObject.id}
              kids={commentObject.kids}
              commentLayer={1}
              subCommentList={this.props.subCommentList}
            />
          );
          return child;
        }
      });
    }

    let shift = parseInt(this.props.commentLayer) * 100 + "px";
    return (
      <div className="comment" style={{ marginLeft: shift }}>
        <div className="clearfix">
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
            <Discription
              text={this.props.text}
              classType="comment-discription"
            />
          </div>
        </div>
        {this.commentChildren}
      </div>
    );
  }
}

export default Comment;
