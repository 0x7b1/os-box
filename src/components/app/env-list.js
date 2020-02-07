import React, { Component } from 'react';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';
import List from '@jetbrains/ring-ui/components/list/list';
import Heading, { H1, H2, H3, H4 } from '@jetbrains/ring-ui/components/heading/heading';

import constants from '../../lib/constants';

export default class EnvList extends Component {
  renderEnvList() {
    const {
      envList,
      onCreateNewBox,
      selectedBoxIndex,
    } = this.props;

    const list = [];

    envList.forEach(({ name, os }, i) => {
      let label = <H2>{name}</H2>;

      if (i === selectedBoxIndex) {
        label = <H1>{name}</H1>;
      }

      list.push({
        id: i,
        label,
        rgItemType: List.ListProps.Type.ITEM,
        icon: constants.box.osList[os].icon,
      });
    });

    list.push({
      label: '+ Add Box',
      onClick: onCreateNewBox,
      rgItemType: List.ListProps.Type.LINK,
    });

    return list;
  }

  render() {
    const {
      userCardInfo,
      onSelectBox,
      selectedBoxIndex,
    } = this.props;

    return (
      <div className="cell">
        <UserCard user={{
          name: <H3>{userCardInfo.name}</H3>,
          login: userCardInfo.username,
          email: userCardInfo.info,
          avatarUrl: userCardInfo.avatar,
        }} />
        <br />
        <List
          activeIndex={selectedBoxIndex}
          data={this.renderEnvList()}
          onSelect={onSelectBox}
        />
      </div>
    );
  }
}
