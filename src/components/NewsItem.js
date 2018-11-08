import React, { Component } from "react";
import axios from "axios";
class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = { newsObject: undefined };
  }

  componentWillMount() {
    if (this.props.location.state !== undefined) {
      this.setState({ newsObject: this.props.location.state.object });
    } else {
      axios
        .get(
          "https://hacker-news.firebaseio.com/v0/item/" +
            this.props.match.params.id +
            ".json"
        )
        .then(result => {
          this.setState({ newsObject: result.data });
        });
    }
    this.getComments();
  }

  getComments() {}
  render() {
    if (this.state.newsObject !== undefined) {
      let kids = this.state.newsObject.kids.map(number => {
        return <li key={number}>{number}</li>;
      });
      let newsObject = this.state.newsObject;
      return (
        <div className="news-info-page">
          <div className="title">{newsObject.title}</div>
          <div className="author">{newsObject.by}</div>
          <div className="score">{newsObject.score}</div>
          <div className="text">{newsObject.text}</div>
          <div>
            <ul>{kids}</ul>
          </div>
          <div>
            <a href={newsObject.url}>link</a>
          </div>
        </div>
      );
    } else {
      return <div className="news-info-page" />;
    }
  }
}

export default NewsItem;
