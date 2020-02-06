import React, { Component } from 'react';
import Theme from '@jetbrains/ring-ui/components/global/theme';
import Header, { Logo, Tray } from '@jetbrains/ring-ui/components/header/header';
import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';
import Button from '@jetbrains/ring-ui/components/button/button';
import {
  ArtifactsIcon,
  PinFilledIcon,
  UserIcon
} from '@jetbrains/ring-ui/components/icon';
import PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu';
import Group from '@jetbrains/ring-ui/components/group/group';

export default class AppHeader extends Component {
  renderLoggedInfo() {
    return (
      <Dropdown anchor={<Button id="userIcon" icon={UserIcon} >{'John Smith'} </Button>}>
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
    );
  }

  renderUnloggedInfo() {
    return (
      <Group>
        <Button text>{'Login'}</Button>
        <Button blue>{'Register'}</Button>
      </Group>
    );
  }

  render() {
    const { isLogged } = this.props;
    return (
      <Header className="header">
        <a href="/">
          <Logo
            className="logo"
            glyph={ArtifactsIcon}
            size={Logo.Size.Size32}
            color={ArtifactsIcon.Color.WHITE}
          />
        </a>
        <Tray>
          {
            isLogged
              ? this.renderLoggedInfo()
              : this.renderUnloggedInfo()
          }
        </Tray>
      </Header>
    );
  }
}

