import React, { Component } from 'react';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';
import List from '@jetbrains/ring-ui/components/list/list';

export default class EnvList extends Component {
  renderEnvList() {
    const { envList } = this.props;

    return envList.map(({ name, os }) => ({
      label: name,
      rgItemType: List.ListProps.Type.ITEM,
      details: os,
    }));
  }

  render() {
    const { userCardInfo } = this.props;

    return (
      <div className="cell">
        <UserCard user={userCardInfo} />
        <br/>
        <List
          data={this.renderEnvList()}
          shortcuts
        />
      </div>
    );
  }
}
