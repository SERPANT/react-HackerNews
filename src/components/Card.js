import React, { Component } from "react";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    let news = this.props.news;
    let path = "/news/" + news.id;
    return (
      <li className="list-item">
        <Link to={{ pathname: path, state: { object: news } }}>
          <div>
            <div className="news-list-title">
              <strong> {news.title}</strong>
            </div>
            <div className="news-list-author-comment">
              By : {news.by}, {news.descendants} comments
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default Card;
