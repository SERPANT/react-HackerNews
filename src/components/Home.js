import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      start: 0,
      stop: 10,
      currentNews: 0
    };
  }

  componentWillMount() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(result => {
        for (let index in result.data) {
          let news = result.data[index];

          if (index >= this.state.start && index <= this.state.stop) {
            axios
              .get(
                "https://hacker-news.firebaseio.com/v0/item/" + news + ".json"
              )
              .then(result => {
                let newArrayList = this.state.newsList;
                newArrayList.push(result.data);
                this.setState({ newsList: newArrayList });
                //  });
              });
          } else {
            continue;
          }
        }
      })
      .catch(err => {
        this.err = err;
      });
  }
  render() {
    let displayPageContent = this.state.newsList.map((news, index) => {
      if (news !== undefined) {
        return <Card key={index} news={news} />;
      }
    });
    return (
      <div>
        <ul className="news-list">{displayPageContent}</ul>
      </div>
    );
  }
}

export default Home;
