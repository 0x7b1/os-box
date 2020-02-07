import React, { Component } from 'react';
import Group from '@jetbrains/ring-ui/components/group/group';
import Island from '@jetbrains/ring-ui/components/island/island';
import Text from '@jetbrains/ring-ui/components/text/text';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import { Tabs, Tab } from '@jetbrains/ring-ui/components/tabs/tabs';
import {
  StarFilledIcon,
  PencilIcon,
  ReviewersGraphIcon,
} from '@jetbrains/ring-ui/components/icon';
import Tag from '@jetbrains/ring-ui/components/tag/tag';
import Link from '@jetbrains/ring-ui/components/link/link';

import TabDetails from './tab-details';
import TabScreenshots from './tab-screenshots';
import TabSettings from './tab-settings';
import TabHistory from './tab-history';
import TabFavorites from './tab-favorites';
import Heading, { H1, H2, H3, H4 } from '@jetbrains/ring-ui/components/heading/heading';

export default class EnvInfo extends Component {
  state = { selected: 'details' };

  renderBoxInfo(starsCount) {
    return (
      <Group style={{ float: 'right' }}>
        <Island>
          <Button
            icon={StarFilledIcon}
            primary
          >
            {'Unstar'}
            <Text info>{` | ${starsCount}`}</Text>
          </Button>
        </Island>
      </Group>
    );
  }

  render() {
    const {
      envData = {},
      tags,
      onAddNewPackage,
      onPreviewScreenshot,
    } = this.props;

    return (
      <div className="cell">
        {this.renderBoxInfo(envData.starsCount)}
        <Tabs
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
        >
          <Tab id="details" title="Packages">
            <TabDetails
              onAddNewPackage={onAddNewPackage}
              packagesList={envData.packages}
              scriptFilesList={envData.scriptFiles}
            />
          </Tab>
          <Tab id="screenshots" title="Screenshots">
            <TabScreenshots
              screenshotList={envData.screenshots}
              onPreviewScreenshot={onPreviewScreenshot}
            />
          </Tab>
          <Tab id="history" title="History">
            <TabHistory historyList={envData.history} />
          </Tab>
          <Tab id="favorites" title="Favorites">
            <TabFavorites />
          </Tab>
          <Tab id="settings" title="Settings">
            <TabSettings
              boxInfo={{
                name: envData.name,
                os: envData.os,
              }}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
