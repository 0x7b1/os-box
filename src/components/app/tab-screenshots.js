import React, { Component } from 'react';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import Button from '@jetbrains/ring-ui/components/button/button';
import List from '@jetbrains/ring-ui/components/list/list';
import Group from '@jetbrains/ring-ui/components/group/group';
import Text from '@jetbrains/ring-ui/components/text/text';
import { DownloadIcon } from '@jetbrains/ring-ui/components/icon';
import Avatar, { Size } from '@jetbrains/ring-ui/components/avatar/avatar';
import Heading, { H1, H2, H3, H4 } from '@jetbrains/ring-ui/components/heading/heading';

export default class TabScreenshots extends Component {
  getPreviewList() {
    const {
      screenshotList,
      onPreviewScreenshot,
    } = this.props;

    return screenshotList.map((url, i) => ({
      label: <Avatar size={256} url={url} />,
      description: <H4>{'Screenshot 19/02/2019 12:22'}</H4>,
      rgItemType: List.ListProps.Type.ITEM,
      key: i,
      onClick: () => onPreviewScreenshot(i),
    }));
  }

  render() {
    return (
      <List
        data={this.getPreviewList()}
      />
    );
  }
}
