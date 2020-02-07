import React, { Component } from 'react';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';
import List from '@jetbrains/ring-ui/components/list/list';
import Text from '@jetbrains/ring-ui/components/text/text';
import Button from '@jetbrains/ring-ui/components/button/button';
import {
  StarFilledIcon,
  ReviewersGraphIcon,
  ExpandIcon,
  AddedIcon,
} from '@jetbrains/ring-ui/components/icon';
import Heading, { H1, H2, H3, H4 } from '@jetbrains/ring-ui/components/heading/heading';

export default class EnvList extends Component {
  renderEnvList() {
    const { envList } = this.props;

    const list = [];

    envList.forEach(({ name, os }) => {
      list.push({
        label: <H2>{name}</H2>,
        rgItemType: List.ListProps.Type.ITEM,
        // details: <Text info>{os}</Text>,
        // icon: 'https://image.flaticon.com/icons/svg/888/888839.svg',
        // icon: 'https://image.flaticon.com/icons/svg/882/882702.svg',
        icon: 'https://image.flaticon.com/icons/svg/2/2235.svg',
      });
    });

    // list.push({
    //   label: 'My Environments',
    //   rgItemType: List.ListProps.Type.SEPARATOR,
    // });

    list.push({
      // label: <Button icon={AddedIcon} primary>Add new</Button>,
      label: '+ Add box',
      rgItemType: List.ListProps.Type.LINK,
    });

    return list;
  }

  render() {
    const { userCardInfo } = this.props;

    return (
      <div className="cell">
        <UserCard user={userCardInfo} />
        <br />
        <List
          data={this.renderEnvList()}
          shortcuts
        />
      </div>
    );
  }
}
