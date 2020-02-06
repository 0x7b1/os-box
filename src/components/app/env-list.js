import React, { Component } from 'react';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';
import List from '@jetbrains/ring-ui/components/list/list';
import Button from '@jetbrains/ring-ui/components/button/button';
import {
  StarFilledIcon,
  ReviewersGraphIcon,
  ExpandIcon,
  AddedIcon,
} from '@jetbrains/ring-ui/components/icon';

export default class EnvList extends Component {
  renderEnvList() {
    const { envList } = this.props;

    const list = [];

    list.push({
      label: 'My Environments',
      rgItemType: List.ListProps.Type.TITLE,
      details: 'he',
    });

    envList.forEach(({ name, os }) => {
      list.push({
        label: name,
        rgItemType: List.ListProps.Type.ITEM,
        details: os,
      });
    });

    list.push({
      label: <Button icon={AddedIcon} primary>Add new</Button>,
      // label: 'Add new',
      rgItemType: List.ListProps.Type.LINK,
    });

    return list;
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
