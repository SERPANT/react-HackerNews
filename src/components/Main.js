import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import NewsItem from "./NewsItem";
class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news/:id" component={NewsItem} />
      </Switch>
    );
  }
}

export default Main;
