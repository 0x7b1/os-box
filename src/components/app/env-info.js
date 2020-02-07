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

import TabConfigurations from './tab-configurations';
import TabInfo from './tab-info';
import TabDetails from './tab-details';
import TabScreenshots from './tab-screenshots';
import TabSettings from './tab-settings';
import TabHistory from './tab-history';
import TabFavorites from './tab-favorites';
import Heading, { H1, H2, H3, H4 } from '@jetbrains/ring-ui/components/heading/heading';

export default class EnvInfo extends Component {
  state = { selected: 'details' };

  renderBoxInfo() {
    return (
      <Group>
        <Heading level={Heading.Levels.H1}>{envData.name}</Heading>
        <Text info>{'IOS 4.3.2'}</Text>
        <Text>{'|'}</Text>
        <Text info>{'Last update 4 days ago'}</Text>
        <ButtonSet style={{ float: 'right' }}>
          <Island>
            <Button icon={StarFilledIcon} primary>Unstar</Button>
          </Island>
          {/* <Button blue>{'Save Changes'}</Button> */}
          {/* <Button>{'Cancel'}</Button> */}
          {/* <Button icon={PencilIcon} primary>Edit Box</Button> */}
        </ButtonSet>
      </Group>

    );
  }

  render() {
    const { envData, tags } = this.props;

    return (
      <div className="cell">
        {/* {this.renderBoxInfo()} */}
        <ButtonSet style={{ float: 'right' }}>
          <Island>
            <Button icon={StarFilledIcon} primary>Unstar</Button>
          </Island>
          {/* <Button blue>{'Save Changes'}</Button> */}
          {/* <Button>{'Cancel'}</Button> */}
          {/* <Button icon={PencilIcon} primary>Edit Box</Button> */}
        </ButtonSet>
        <Tabs
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
        >
          {/* <Tab id="info" title="Info">
            <TabInfo
              envDescription={envData.readme}
              tags={tags}
            />
          </Tab> */}
          {/* <Tab id="configurations" title="Configurations">
            <TabConfigurations />
          </Tab> */}
          <Tab id="details" title="Packages">
            <TabDetails />
          </Tab>
          <Tab id="screenshots" title="Screenshots">
            <TabScreenshots />
          </Tab>
          <Tab id="history" title="History">
            <TabHistory />
          </Tab>
          <Tab id="favorites" title="Favorites">
            <TabFavorites />
          </Tab>
          <Tab id="settings" title="Settings">
            <TabSettings />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
