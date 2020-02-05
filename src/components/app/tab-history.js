import React, { Component } from 'react';
import { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';
import Input from '@jetbrains/ring-ui/components/input/input';
import { SmartTabs, Tabs, Tab } from '@jetbrains/ring-ui/components/tabs/tabs';
import Button from '@jetbrains/ring-ui/components/button/button';
import Group from '@jetbrains/ring-ui/components/group/group';
import List from '@jetbrains/ring-ui/components/list/list';
import Panel from '@jetbrains/ring-ui/components/panel/panel';
import {
  TrashIcon,
  FileIcon,
} from '@jetbrains/ring-ui/components/icon';

export default function TabFavorites(props) {
  return (
    <>
      <Dialog
        show={true}
        onCloseAttempt={() => { }}
        trapFocus
        autoFocusFirst={true}
      >
        <Header>Edit Item</Header>
        <Content>
          <SmartTabs>
            <Tab title="Information">
              <Input
                label="Tool Name"
                defaultValue="i3wm"
              />
              <Input
                label="Description"
                defaultValue="Tiling Window Manager"
                multiline
              />
              <Input
                label="Link"
                defaultValue="http://github.com/aadtr/i3"
              />
            </Tab>
            <Tab title="Attachments">
              <Button icon={FileIcon} primary delayed>Upload File</Button>
              <List
                data={[
                  {
                    label: 'Files (2)',
                    rgItemType: List.ListProps.Type.TITLE
                  },
                  {
                    label:
                      <Group><Text>{'google-chrome-stable_current_amd64.deb'}</Text><Text
                        info>{'123MB'}</Text></Group>,
                    rgItemType: List.ListProps.Type.ITEM,
                    description: <Button
                      icon={TrashIcon}>Delete</Button>
                  },
                  {
                    label:
                      <Group><Text>{'clion_2.3.3.deb'}</Text><Text
                        info>{'3MB'}</Text></Group>,
                    rgItemType: List.ListProps.Type.ITEM,
                    description: <Button
                      icon={TrashIcon}>Delete</Button>
                  }
                ]}
                shortcuts
              />
            </Tab>
            <Tab title="Integrations">
              <h3>File Drive</h3>
              <Toggle>Dropbox</Toggle>
              <h3>Dotfiles Repository</h3>
              <Toggle>Github</Toggle>
            </Tab>
          </SmartTabs>
        </Content>
        <Panel>
          <Button primary>Save</Button>
          <Button>Cancel</Button>
        </Panel>
      </Dialog>
    </>
  );
}
