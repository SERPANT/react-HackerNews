import axios from "axios";
import Author from "./Author";
import Comment from "./Comment";
import ListItem from "./ListItem";
import Discription from "./Discription";
import React, { Component } from "react";
import PageCommentList from "./PageCommentList";

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = { newsObject: undefined, commentList: [], subCommentList: [] };
  }

  componentWillMount() {
    if (this.props.location.state !== undefined) {
      this.setState({ newsObject: this.props.location.state.object }, () =>
        this.loadDataFromId(this.state.newsObject.kids)
      );
    } else {
      axios
        .get(
          "https://hacker-news.firebaseio.com/v0/item/" +
            this.props.match.params.id +
            ".json"
        )
        .then(result => {
          this.setState({ newsObject: result.data }, () => {
            this.loadDataFromId(this.state.newsObject.kids);
          });
        });
    }
  }

  render() {
    if (this.state.newsObject !== undefined) {
      let kids;
      if (this.state.newsObject.kids !== undefined) {
        kids = this.state.commentList.map((comment, index) => {
          let commentDate = this.convertUnixTimeToNormal(comment.time);
          let commentObject = (
            <Comment
              by={comment.by}
              text={comment.text}
              commentDate={commentDate}
            />
          );
          return (
            <ListItem
              content={commentObject}
              classType="comment-item"
              key={index}
            />
          );
        });
      } else {
        kids = null;
      }
      let newsObject = this.state.newsObject;
      return (
        <div className="news-info-page-container">
          <div className="news-info-page">
            {/* <div>{newsObject.id}</div> */}
            <div className="title-container">
              <h1>
                <a href={newsObject.url}>{newsObject.title}</a>
              </h1>
              <Author by={newsObject.by} classType="page-author" />
            </div>

            <Discription text={newsObject.text} classType="page-discription" />

            <PageCommentList kids={kids} />
          </div>
        </div>
      );
    } else {
      return <div className="news-info-page" />;
    }
  }

  loadDataFromId(result) {
    for (let index in result) {
      let news = result[index];

      axios
        .get("https://hacker-news.firebaseio.com/v0/item/" + news + ".json")
        .then(result => {
          let newArrayList = this.state.commentList;
          newArrayList.push(result.data);
          this.setState({ commentList: newArrayList }, () => {
            console.log(this.state.commentList);
            if (result.data.kids !== undefined) {
              this.loadDataFromId(result.data.kids);
            }
          });
        });
    }
  }

  convertUnixTimeToNormal(unixTimestamp) {
    let a = new Date(unixTimestamp * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = month + " " + date + " ," + year + " @ " + hour + ":" + min;
    return time;
  }
}

export default NewsItem;
