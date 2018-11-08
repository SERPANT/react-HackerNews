import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: "TopStories" };
  }

  changeTab(newTab) {
    this.setState({ currentTab: newTab });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header tabChange={this.changeTab.bind(this)} />
            <Main />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
