import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NewsItem from "./NewsItem";
import AskHNStories from "./AskHNStories";
import JobHNStories from "./JobHNStories";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: this.props.currentTab };
  }
  // componentDidUpdate()
  // {

  // }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AskHNStories" component={AskHNStories} />
        <Route exact path="/JobHNStories" component={JobHNStories} />
        <Route path="/news/:id" component={NewsItem} />
      </Switch>
    );
  }
}

export default Main;
