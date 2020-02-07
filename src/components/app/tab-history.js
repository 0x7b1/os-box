import React, { Component } from "react";
import List from "@jetbrains/ring-ui/components/list/list";

export default class TabFavorites extends Component {
  getHistoryList() {
    const { historyList } = this.props;

    return historyList.map(({ event, date }) => ({
      label: event,
      rgItemType: List.ListProps.Type.ITEM,
      description: date
    }));
  }

  render() {
    return <List maxHeight={400} data={this.getHistoryList()} />;
  }
}
