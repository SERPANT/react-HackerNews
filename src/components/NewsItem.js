import React, { Component } from "react";

class NewsItem extends Component {
  componentWillMount() {
    this.newsObject = this.props.location.state.object;
    this.getComments();
  }

  getComments() {}
  render() {
    let kids = this.newsObject.kids.map(number => {
      return <li key={number}>{number}</li>;
    });
    console.log(this.newsObject);
    return (
      <div className="news-info-page">
        <div className="title">{this.newsObject.title}</div>
        <div className="author">{this.newsObject.by}</div>
        <div className="score">{this.newsObject.score}</div>
        <div className="text">{this.newsObject.text}</div>
        <div>
          <ul>{kids}</ul>
        </div>
        <div>
          <a href={this.newsObject.url}>link</a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
