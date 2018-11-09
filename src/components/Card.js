import Author from "./Author";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Card extends Component {
  render() {
    let news = this.props.news;
    let path = "/news/" + news.id;
    let subheading = `By : ${news.by}, ${news.descendants} comments`;
    let ListItemContent = (
      <Link to={{ pathname: path, state: { object: news } }}>
        <div className="news-list-title">{news.title}</div>
        <Author classType="news-list-author-comment" by={subheading} />
      </Link>
    );

    return <ListItem classType="list-item" content={ListItemContent} />;
  }
}

export default Card;
