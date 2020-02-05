import React, { Component } from 'react';
import Icon from '@jetbrains/ring-ui/components/icon/icon';
import Group from '@jetbrains/ring-ui/components/group/group';
import Text from '@jetbrains/ring-ui/components/text/text';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import { SmartTabs, Tabs, Tab } from '@jetbrains/ring-ui/components/tabs/tabs';
import Tag from '@jetbrains/ring-ui/components/tag/tag';
import Island, { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import List from '@jetbrains/ring-ui/components/list/list';
import Code from '@jetbrains/ring-ui/components/code/code';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';
import Link from '@jetbrains/ring-ui/components/link/link';
import Panel from '@jetbrains/ring-ui/components/panel/panel';
import Input from '@jetbrains/ring-ui/components/input/input';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';
import {
  RemoveIcon,
  StarFilledIcon,
  ReviewersGraphIcon,
  FolderIcon,
  PinFilledIcon,
  PinEmptyIcon,
  CommentIcon,
  AttachmentIcon,
  TrashIcon,
  LinkIcon,
  MoreOptionsIcon,
  DownloadIcon,
  FileIcon,
  PencilIcon,
} from '@jetbrains/ring-ui/components/icon';
import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';
import PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu';

const listDisabled = false;

const ListDescription = (
  <div>
    <ButtonSet>
      <Button icon={CommentIcon} />
      <Button icon={LinkIcon} />
      <Button icon={AttachmentIcon} />
    </ButtonSet>
    <Dropdown
      anchor={
        <Button icon={MoreOptionsIcon} />
        // <Button delayed>Options</Button>
        // <Button short>...</Button>
      }
    >
      <PopupMenu
        closeOnSelect
        data={[
          { label: <Button icon={PinEmptyIcon}>Unpin</Button> },
          { label: <Button icon={PencilIcon}>Edit</Button> },
          { label: <Button icon={TrashIcon}>Remove</Button> },
          {/*{label: <Button icon={RemovedIcon}>Hide</Button>},*/ }
        ]}
      />
    </Dropdown>
  </div>
);

const tags = [
  {
    name: 'Ubuntu',
  },
  {
    name: 'i3wm',
  },
];

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
  state = { selected: 'first' };

  renderTabInfo() {
    return (
      <Tab
        id="thirddd"
        title="Info"
      >
        <Group>
          {
            tags.map(({ name }) => (
              <Tag key={name} readOnly angled>
                <Link
                  pseudo
                  href="#hash"
                >
                  {name}
                </Link>
              </Tag>
            ))
          }
        </Group>
        <br />
        <br />
        <Island className="limited-island" narrow>
          {/* <Header border>
            {'Readme'}
            <Button icon={PencilIcon}>Edit</Button>
          </Header> */}
          <Content>{envDescription}</Content>
        </Island>
      </Tab>
    );
  }

  renderTabConfigurations() {
    return (
      <Tab
        id="exp"
        title="Configurations"
      >
        <List
          data={[
            {
              'rgItemType': List.ListProps.Type.TITLE,
              label: 'System Graphics / i3wm',
              description: 'Sync Status'
            },
            {
              'label': 'blocks',
              'rgItemType': List.ListProps.Type.ITEM,
              glyph: FolderIcon,
              checkbox: true,
              iconSize: Icon.Size.Size16
            },
            {
              'label': 'scripts',
              'rgItemType': List.ListProps.Type.ITEM,
              glyph: FolderIcon,
              checkbox: true,
              iconSize: Icon.Size.Size16
            },
            {
              'label': 'config',
              'rgItemType': List.ListProps.Type.ITEM,
              glyph: FileIcon,
              checkbox: true,
              iconSize: Icon.Size.Size16
            },
            {
              'label': 'i3blocks.conf',
              'rgItemType': List.ListProps.Type.ITEM,
              glyph: FileIcon,
              checkbox: true,
              iconSize: Icon.Size.Size16
            }
          ]}
          compact
          onSelect={console.log.bind(console)}
        />
        <Code
          language='bash'
          code={`
                        command=$HOME/.config/i3/blocks/$BLOCK_NAME
                        separator_block_width=15
                        markup=none

                        [volume]
                        instance=Master
                        interval=3
                        signal=10

                        [battery]
                        interval=30

                        [bandwidth]
                        interval=30

                        [calendar]
                        interval=once

                        [time]
                        command=date '+%H:%M'
                        interval=30
                      `}
        />
        <Button icon={DownloadIcon}>Download File</Button>
      </Tab>
    );
  }

  getDetailsData() {
    const data = [
      {
        category: 'System Graphics (5)',
        items: [
          {
            name: 'i3wm',
            description: 'Tiling Window Manager',
          },
          {
            name: 'Materia compact',
            description: 'GTK Theme',
          },
        ]
      },
      {
        category: 'Packages to install (23)',
        items: [
          {
            name: 'Firefox',
            description: 'Web Browser',
            pinned: true,
          },
          {
            name: 'Materia compact',
            description: 'GTK Theme',
          },
        ]
      }
    ];

    const result = [];

    data.forEach(({ category, items }, i) => {
      result.push({
        rgItemType: List.ListProps.Type.TITLE,
        label: category,
      });

      items.forEach(({ name, description, pinned }) => {
        result.push({
          label: (
            <Group>
              <Text>{name}</Text>
              <Text info>{description}</Text>
              {
                pinned && (
                  <PinFilledIcon
                    className="ring-icon"
                    color={PinFilledIcon.Color.GRAY}
                    size={PinFilledIcon.Size.Size16}
                  />
                )
              }
            </Group>
          ),
          rgItemType: List.ListProps.Type.ITEM,
          description: ListDescription,
          disabled: true,
        });
      });

      if (false) {
        result.push({
          label: <Button short text delayed>{'Add New Item'}</Button>,
          rgItemType: List.ListProps.Type.ITEM,
          disabled: true
        });

        result.push({
          rgItemType: List.ListProps.Type.SEPARATOR
        });
      }
    });

    return result;
  }

  renderTabDetails() {
    return (
      <Tab
        id="first"
        title="Details"
      >
        <List
          data={this.getDetailsData()}
          shortcuts
          compact
          onSelect={console.log}
        />
      </Tab>
    );
  }

  renderTabScreenshots() {
    return (
      <Tab
        id="third"
        title="Screenshots"
      >
        <Dialog
          show
          onCloseAttempt={() => {
          }}
          trapFocus
          autoFocusFirst={true}
          showCloseButton
        >
          <Header>Materia compact</Header>
          <Content>
            <List
              data=
              {[
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
                    icon={DownloadIcon}>Download</Button>
                },
                {
                  label:
                    <Group><Text>{'clion_2.3.3.deb'}</Text><Text
                      info>{'3MB'}</Text></Group>,
                  rgItemType: List.ListProps.Type.ITEM,
                  description: <Button
                    icon={DownloadIcon}>Download</Button>
                }
              ]}
              shortcuts
            />
          </Content>
        </Dialog>
      </Tab>
    );
  }

  renderTabHistory() {
    return (
      <Tab
        id="fourth"
        title="History"
      >

        <Dialog
          show={true}
          onCloseAttempt={() => {
          }}
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

      </Tab>
    );
  }

  renderTabSettings() {
    return (
      <Tab
        id="disabled"
        title="Settings"
      >
        <form className="inputs">
          <Input
            label="Device Name"
            defaultValue="Desktop Computer"
          />
          <Input
            label="Operating System"
            defaultValue="Ubuntu 18.04"
          />
          <Input
            label="Github Account"
            defaultValue="0x7b1"
          />
          <Input
            label="Repository"
            defaultValue="dotfiles"
          />
          <Input
            label="Creation Date"
            defaultValue="17/03/17 15:40"
            disabled
          />
          <Toggle defaultChecked>Allow Comments</Toggle>
          <br />
          <br />
          <Toggle>Private Env</Toggle>
          <Panel>
            <Button blue>{'Apply changes'}</Button>
            <Button>{'Cancel'}</Button>
          </Panel>
        </form>
        <br />
        <h3>Advanced</h3>
        <Button icon={DownloadIcon}>Export Data as CSV</Button>
        <br />
        <Button icon={DownloadIcon}>Export Data as JSON</Button>
        <br />
        <br />
        <Button
          icon={RemoveIcon}
          danger
        >
          {'Delete Account'}
        </Button>
      </Tab>
    );
  }

  renderTabFavorites() {
    return (
      <Tab
        id="disabled__"
        title="Favorites"
      >
        <UserCard user={{
          login: '4 envs',
          name: 'erik_kowalski',
          avatarUrl: 'https://img.discogs.com/vpyftS0ZUxFOucjqChuzgp8M8TM=/360x360/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5442-1452060953-8390.png.jpg',
          href: '#'
        }}
        />
      </Tab>
    );
  }

  render() {
    return (
      <div className="cell">
        <h2>Desktop Computer</h2>
        <Group>
          <Text info>Ubuntu 18.04</Text>
          <Text>|</Text>
          <Text info>Last update 4 months ago</Text>
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
          {this.renderTabInfo()}
          {/* {this.renderTabConfigurations()} */}
          {this.renderTabDetails()}
          {/* {this.renderTabScreenshots()} */}
          {/* {this.renderTabHistory()} */}
          {this.renderTabFavorites()}
          {this.renderTabSettings()}
        </Tabs>
      </div>
    );
  }
}
