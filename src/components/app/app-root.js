import React, { Component, PureComponent } from 'react';
import Header, {
  Logo,
  Tray,
  TrayIcon,
  SmartProfile,
  SmartServices
} from '@jetbrains/ring-ui/components/header/header';
import Theme from '@jetbrains/ring-ui/components/global/theme';
import Auth from '@jetbrains/ring-ui/components/auth/auth';
import Footer from '@jetbrains/ring-ui/components/footer/footer';
import hubLogo from '@jetbrains/logos/hub/hub.svg';
import { Grid, Row, Col } from '@jetbrains/ring-ui/components/grid/grid';
import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';
import PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu';
import Popup from '@jetbrains/ring-ui/components/popup/popup';
import Link from '@jetbrains/ring-ui/components/link/link';
import {
  UserCard,
  UserCardTooltip
} from '@jetbrains/ring-ui/components/user-card/user-card';
import List from '@jetbrains/ring-ui/components/list/list';
import {
  MoreOptionsIcon,
  DownloadIcon,
  FileIcon,
  StarEmptyIcon,
  RemovedIcon,
  PencilIcon
} from '@jetbrains/ring-ui/components/icon';
import {
  WarningIcon,
  PinFilledIcon,
  PinEmptyIcon,
  ModifiedIcon,
  CommentIcon,
  AttachmentIcon
} from '@jetbrains/ring-ui/components/icon';
import {
  TrashIcon,
  UpdateIcon,
  ArtifactsIcon,
  LinkIcon,
  SettingsIcon,
  InfoIcon,
} from '@jetbrains/ring-ui/components/icon';
import {
  DragIcon,
  ExpandIcon,
  RemoveIcon,
  CodeIcon,
  StarFilledIcon,
  UserIcon,
  ReviewersGraphIcon,
  FolderIcon
} from '@jetbrains/ring-ui/components/icon';
import Tag from '@jetbrains/ring-ui/components/tag/tag';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import { SmartTabs, Tabs, Tab } from '@jetbrains/ring-ui/components/tabs/tabs';
import Input, {
  Size,
  Theme as ThemeI
} from '@jetbrains/ring-ui/components/input/input';
import Text from '@jetbrains/ring-ui/components/text/text';
import Group from '@jetbrains/ring-ui/components/group/group';
import Island, {
  Header as HeaderI,
  Content
} from '@jetbrains/ring-ui/components/island/island';
import Badge from '@jetbrains/ring-ui/components/badge/badge';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';
import Panel from '@jetbrains/ring-ui/components/panel/panel';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import Code from '@jetbrains/ring-ui/components/code/code';
import Icon from '@jetbrains/ring-ui/components/icon/icon';

import './app.css';

const listDisabled = false;

const addNewItem = {
  'label': <Button short text delayed>Add New Item</Button>,
  'rgItemType': List.ListProps.Type.ITEM,
  disabled: true
};

const separatorItem = {
  'rgItemType': List.ListProps.Type.SEPARATOR
};

const ListDescription = (
  <div>
    <ButtonSet>
      <Button icon={CommentIcon}></Button>
      <Button icon={LinkIcon}></Button>
      <Button icon={AttachmentIcon}></Button>
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

var listData = [
  // {
  //   'rgItemType': List.ListProps.Type.SEPARATOR,
  //   description: <Text info>Last sync yesterday 10:45</Text>,
  // },
  // {
  //   'rgItemType': List.ListProps.Type.TITLE,
  //   label: <Button short text delayed>Add New Section</Button>,
  // },
  // separatorItem,
  {
    'rgItemType': List.ListProps.Type.TITLE,
    label: 'System Graphics (5)'
  },
  // {
  //   'rgItemType': List.ListProps.Type.SEPARATOR,
  // },
  {
    'label': (
      <Group>
        <Text>i3wm</Text>
        <Text info>Tiling Window Manager</Text>
      </Group>
    ),
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  {
    'label': (
      <Group>
        <Text>Materia compact</Text>
        <Text info>GTK Theme</Text>
        {/*<Badge>CLI</Badge>*/}
        {/*<Badge>dotfiles</Badge>*/}
      </Group>
    ),
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  {
    'label': (
      <Group>
        <Text>GTK 3</Text>
        <Text info>Desktop System</Text>
      </Group>
    ),
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  {
    'label': (
      <Group>
        <Text>Papirus-Light</Text>
        <Text info>Icon Theme</Text>
      </Group>
    ),
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  {
    'label': (
      <Group>
        <Text>SF Compact Display 9</Text>
        <Text info>System Font</Text>
      </Group>
    ),
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  {
    'label': (
      <Group>
        <Text>ZSH</Text>
        <Text info>Shell</Text>
      </Group>
    ),
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  addNewItem,
  separatorItem,
  {
    'rgItemType': List.ListProps.Type.TITLE,
    'label': 'Packages to install (23)'
  },
  // {
  //   'rgItemType': List.ListProps.Type.SEPARATOR,
  // },
  {
    'label': (
      <Group>
        <Text>Firefox</Text>
        <PinFilledIcon
          className="ring-icon"
          color={PinFilledIcon.Color.GRAY}
          size={PinFilledIcon.Size.Size16}
        />
        {/*<Text info>65.3.4</Text>*/}
      </Group>
    ),
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  {
    'label': 'Audacity',
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Audio editor'
  },
  {
    'label': 'Idea',
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Java IDE'
  },
  {
    'label': 'Sublime Text',
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: '3.4'
  },
  addNewItem,
  separatorItem,
  {
    'rgItemType': List.ListProps.Type.TITLE,
    'label': 'Configurations (3)'
  },
  {
    'label': 'Install drivers',
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  {
    'label': 'Set docker images for development',
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled
    // details: 'Web Browser'
  },
  {
    label: 'Install fonts',
    'rgItemType': List.ListProps.Type.ITEM,
    description: ListDescription,
    disabled: listDisabled,
  },
  addNewItem,
  separatorItem,
  {
    'rgItemType': List.ListProps.Type.TITLE,
    label: <Button short text delayed>Add New Section</Button>
  }
];

var listDataGeneral = [
  {
    // glyph: WarningIcon,
    label: 'Desktop Computer',
    rgItemType: List.ListProps.Type.ITEM,
    // description: 'Ubuntu 18.04',
    // description: (
    //   <div>
    //     <Text info>2</Text>
    //     <StarFilledIcon
    //       className="ring-icon"
    //       color={StarFilledIcon.Color.GRAY}
    //       size={StarFilledIcon.Size.Size14}
    //     />
    //   </div>
    // ),
    details: 'Ubuntu 18.04'
  },
  {
    label: 'Mobile Phone',
    rgItemType: List.ListProps.Type.ITEM,
    details: (
      <Group>
        <Text info>iOS 12.3.2</Text>
      </Group>
    )
  }
];

class ClearableInput extends PureComponent {
  state = {
    text: this.props.defaultValue
  };

  setText = e => {
    this.setState({
      text: e.target.value
    });
  };

  clear = () => {
    this.setState({
      text: ''
    });
  };

  render() {
    const { defaultValue, ...restProps } = this.props; // eslint-disable unused-vars
    return (
      <Input
        value={this.state.text}
        onChange={this.setText}
        onClear={this.clear}
        {...restProps}
      />
    );
  }
}

export default class AppRoot extends Component {
  componentDidMount() {
    // You can uncomment this after registering your client as a Hub service
    // https://www.jetbrains.com/help/hub/2017.3/OAuth-2.0-Authorization.html#d79479e312
    // this.auth.init();
  }

  auth = new Auth({
    // clientId: <your client id here>
    serverUri: 'https://hub.jetbrains.com' // replace with your Hub server
  });
  state = { selected: 'first' };

  render() {
    const Comp = props => <a {...props}>This is component</a>;

    return (
      <div>
        <Header className="header" theme={Theme.LIGHT}>
          <a href="/">
            {/*<Logo className="logo" glyph={hubLogo} size={Logo.Size.Size40} />*/}
            <Logo className="logo" glyph={ArtifactsIcon}
              size={Logo.Size.Size40} />
          </a>
          <Tray>
            {/*             <Group>
               <Button text>{'Login'}</Button>
               <Button blue>{'Register'}</Button>
             </Group>*/}

            <Dropdown anchor={<Button icon={UserIcon}>0x7b1</Button>}>
              <PopupMenu
                top={-17}
                closeOnSelect
                data={[
                  { label: <Button text>Profile</Button> },
                  { label: <Button text>Settings</Button> },
                  { label: <Button text>Log Out</Button> }
                ]}
              />
            </Dropdown>

          </Tray>
        </Header>
        <div className="app-content">
          <Grid data-test="distribution">
            <Row around="xs">
              <Col xs>
                <div className="cell">
                  {/*                    <UserCard user={{
                      name: '0x7b1',
                      login: 'Linux Porn',
                      avatarUrl: `/api/rest/avatar/default?username=Jet%20Brains`,
                    }}/>
                    <br/>
*/}
                  <h2>0x7b1</h2>
                  <List
                    data={listDataGeneral}
                    shortcuts
                    _selectable='TODO:IMPLEMENT'
                    onSelect={console.log.bind(console)}
                  />
                </div>
              </Col>
              <Col xs={9}>
                <div className="cell">
                  <h2>Desktop Computer</h2>
                  <Group>
                    <Text info>Ubuntu 18.04</Text>
                    <Text>|</Text>
                    <Text info>Last update 4 months ago</Text>
                    <ButtonSet style={{ float: 'right' }}>
                      <Button icon={ReviewersGraphIcon}>Share / Embed</Button>
                      <Button icon={StarFilledIcon} primary>Favorited</Button>
                      {/*<Button icon={StarEmptyIcon}>Favorite</Button>*/}
                    </ButtonSet>
                  </Group>
                  <br />
                  <br />
                  <Tabs
                    selected={this.state.selected}
                    onSelect={selected => this.setState({ selected })}
                  >
                    <Tab
                      id="thirddd"
                      title="Info"
                    >
                      <Group>
                        <Tag readOnly angled><Link pseudo
                          href="#hash">Ubuntu</Link></Tag>
                        <Tag readOnly angled><Link pseudo
                          href="#hash">i3wm</Link></Tag>
                        <Tag readOnly angled><Link pseudo href="#hash">Web
                          Development</Link></Tag>
                      </Group>
                      <br />
                      <br />
                      <Island className="limited-island" narrow>
                        <HeaderI border>
                          Readme <Button icon={PencilIcon}>Edit</Button>
                        </HeaderI>
                        <Content>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting
                          industry. Lorem Ipsum has been the industry's standard
                          dummy text ever
                          since the 1500s, when an unknown printer took a galley
                          of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five
                          centuries, but also the leap into electronic
                          typesetting, remaining
                          essentially unchanged.
                        </Content>
                      </Island>
                    </Tab>
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
                    <Tab
                      id="first"
                      title="Details"
                    >
                      <List
                        data={listData}
                        shortcuts
                        compact
                        onSelect={console.log.bind(console)}
                        _hint={(
                          <Group>
                            <Text info>Last sync 14/03/19 23:32</Text>
                          </Group>
                        )}
                      />
                      {/*<br/>*/}
                      {/*<Group>*/}
                      {/*<UpdateIcon*/}
                      {/*className="ring-icon"*/}
                      {/*color={UpdateIcon.Color.GRAY}*/}
                      {/*size={UpdateIcon.Size.Size14}*/}
                      {/*/>*/}
                      {/*<Text info>Last update 27/02/18 12:23</Text>*/}
                      {/*</Group>*/}
                    </Tab>
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
                        <HeaderI>Materia compact</HeaderI>
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
                        <HeaderI>Edit Item</HeaderI>
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
                              <Button icon={FileIcon} primary delayed>Upload
                                File</Button>
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
                          label="Description"
                          defaultValue="Lorem Ipsum dotfiles"
                          multiline
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
                      <Button icon={RemoveIcon}
                        danger>{'Delete Account'}</Button>
                    </Tab>
                    <Tab
                      id="disabled__"
                      title="Favorites"
                    >
                      <UserCard user={{
                        login: '4 Envs',
                        name: 'erik_kowalski',
                        // email: '@0x7b1',
                        avatarUrl: `/api/rest/avatar/default?username=Jet%20Brains`,
                        href: '#'
                      }} />
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>

          </Grid>
        </div>

        {/*         <Footer
           className="stuff"
           right={[
             [{url: 'http://www.jetbrains.com/teamcity/?fromserver', label: 'TeamCity'}, ' by JetBrains'],
             'Enterprise 8.0.2 EAP (build 27448)',
             '2019',
           ]}
         />*/}
      </div>
    );
  }
}
