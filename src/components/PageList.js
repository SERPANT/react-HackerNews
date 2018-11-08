import React, { Component } from "react";

class PageList extends Component {
  clickHandler(e) {
    let pageClicked = parseInt(e.target.value);
    let current = parseInt(this.props.currentPageNo);
    let diff = pageClicked - current;

    this.props.clickAction(diff * 10, pageClicked);
  }

  render() {
    let containerClass = "pages-container " + this.props.pageContainerClass;
    let pageNumbers = [];
    for (
      let page = this.props.currentPageNo;
      page < this.props.currentPageNo + 5;
      page++
    ) {
      if (page > this.props.pages) {
        break;
      }
      pageNumbers.push(
        <li
          key={page}
          className={
            this.props.currentPageNo === page
              ? "page-item active-page"
              : "page-item"
          }
          onClick={this.clickHandler.bind(this)}
          value={page}
        >
          {page}
        </li>
      );
    }
    return (
      <div className={containerClass}>
        <ul className="page-list">{pageNumbers}</ul>
      </div>
    );
  }
}

export default PageList;
