import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import NewsList from "./NewsList";
import PageList from "./PageList";

class JobHNStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idList: [],
      newsList: [],
      start: 0,
      stop: 9,
      currentNews: 1,
      pages: 0,
      loaded: false
    };
  }

  updatePages(diff, newCurrent) {
    let newStart = this.state.start + diff;
    let newStop = this.state.stop + diff;
    this.setState(
      {
        start: newStart,
        stop: newStop,
        currentNews: newCurrent,
        newsList: [],
        loaded: false
      },
      () => {
        this.loadDataFromId(this.state.idList);
      }
    );
  }

  componentWillMount() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then(result => {
        this.setState({ idList: result });
        let noOfPage = Math.floor(result.data.length / 11);
        this.setState({ pages: noOfPage });
        this.loadDataFromId(result);
      })
      .catch(err => {
        this.err = err;
      });
  }

  loadDataFromId(result) {
    for (let index in result.data) {
      let news = result.data[index];

      if (index >= this.state.start && index <= this.state.stop) {
        axios
          .get("https://hacker-news.firebaseio.com/v0/item/" + news + ".json")
          .then(result => {
            let newArrayList = this.state.newsList;
            newArrayList.push(result.data);
            this.setState({ newsList: newArrayList }, () => {
              if (index == this.state.stop) {
                this.setState({ loaded: true });
              }
            });
          });
      } else {
        continue;
      }
    }
  }

  render() {
    let displayPageContent = this.state.newsList.map((news, index) => {
      if (news !== undefined) {
        return <Card key={index} news={news} />;
      } else {
        return null;
      }
    });
    return (
      <div>
        <NewsList displayPageContent={displayPageContent} />
        <PageList
          pageContainerClass={this.state.loaded ? "" : "none"}
          currentPageNo={this.state.currentNews}
          pages={this.state.pages}
          clickAction={this.updatePages.bind(this)}
        />
      </div>
    );
  }
}

export default JobHNStories;
