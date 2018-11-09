import NewsItem from "./NewsItem";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class News extends Component {
  render() {
    console.log(this.props.location.state);
    return (
      <Switch>
        <Route path="/news/:id" component={NewsItem} />
      </Switch>
    );
  }
}

export default News;
