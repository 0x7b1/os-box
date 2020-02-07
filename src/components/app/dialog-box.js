import React, { Component } from 'react';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import Select from '@jetbrains/ring-ui/components/select/select';
import Input from '@jetbrains/ring-ui/components/input/input';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';

import constants from '../../lib/constants';

export default class DialogBox extends Component {
  state = {
    osId: '',
    boxName: '',
  };

  getOSList() {
    const osList = [];

    for (let os in constants.box.osList) {
      osList.push({
        label: constants.box.osList[os].name,
        key: os,
        icon: constants.box.osList[os].icon,
      });
    }

    return osList;
  }

  render() {
    const {
      dialogMode,
      onCloseDialog,
      onCreateBox,
    } = this.props;

    const {
      osId,
      boxName,
    } = this.state;

    return (
      <Dialog
        show={dialogMode === constants.dialog.mode.BOX}
        onCloseAttempt={onCloseDialog}
        trapFocus
        autoFocusFirst={true}
        showCloseButton
      >
        <Header>New Box</Header>
        <Content>
          <form className="inputs">
            <Input
              label="Box Name"
              onChange={({ target: { value } }) => this.setState({ boxName: value })}
            />
            <Select
              filter
              compact
              selected={0}
              onSelect={({ key }) => this.setState({ osId: key })}
              label="Operating System"
              data={this.getOSList()} />
            <br />
            <br />
            <Toggle>Private</Toggle>
            <br />
            <br />
            <ButtonSet style={{ float: 'right' }}>
              <Button onClick={() => onCreateBox(osId, boxName)} blue>{'Add'}</Button>
              <Button onClick={onCloseDialog}>{'Cancel'}</Button>
            </ButtonSet>
          </form>
        </Content>
      </Dialog >
    );
  }
}
