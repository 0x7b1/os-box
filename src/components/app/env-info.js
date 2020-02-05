import React, { Component } from 'react';
import Group from '@jetbrains/ring-ui/components/group/group';
import Text from '@jetbrains/ring-ui/components/text/text';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import { Tabs, Tab } from '@jetbrains/ring-ui/components/tabs/tabs';
import {
  StarFilledIcon,
  ReviewersGraphIcon,
} from '@jetbrains/ring-ui/components/icon';

import TabConfigurations from './tab-configurations';
import TabInfo from './tab-info';
import TabDetails from './tab-details';
import TabScreenshots from './tab-screenshots';
import TabSettings from './tab-settings';
import TabHistory from './tab-history';
import TabFavorites from './tab-favorites';

const envDescription = `
Lorem Ipsum is simply dummy text of the printing and
typesetting
industry.Lorem Ipsum has been the industry's standard
dummy text ever
since the 1500s, when an unknown printer took a galley
of type and
            scrambled it to make a type specimen book.It has
survived not only five
centuries, but also the leap into electronic
typesetting, remaining
essentially unchanged.`;

export default class EnvInfo extends Component {
  state = { selected: 'info' };

  render() {
    const { envData, tags } = this.props;

    return (
      <div className="cell">
        <h2>{envData.name}</h2>
        <Group>
          <Text info>{envData.os}</Text>
          <Text>|</Text>
          <Text info>{envData.dateUpdate}</Text>
          <ButtonSet style={{ float: 'right' }}>
            <Button icon={ReviewersGraphIcon}>Share / Embed</Button>
            <Button icon={StarFilledIcon} primary>Favorited</Button>
          </ButtonSet>
        </Group>
        <br />
        <br />
        <Tabs
          selected={this.state.selected}
          onSelect={selected => this.setState({ selected })}
        >
          <Tab id="info" title="Info">
            <TabInfo
              envDescription={envDescription}
              tags={tags}
            />
          </Tab>
          <Tab id="configurations" title="Configurations">
            <TabConfigurations />
          </Tab>
          <Tab id="details" title="Details">
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
