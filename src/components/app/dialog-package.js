import React, { Component } from 'react';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import Select from '@jetbrains/ring-ui/components/select/select';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';

import constants from '../../lib/constants';

export default class DialogPackage extends Component {
  state = { selectedSoftwareId: null };

  getPackagesList() {
    const { selectedPackages = [] } = this.props;
    const { packages } = constants;
    const packagesList = [];

    for (let pckg in packages) {
      if (selectedPackages.indexOf(pckg) === -1) {
        packagesList.push({
          label: packages[pckg].name,
          key: pckg,
          icon: packages[pckg].icon,
        });
      }
    }

    return packagesList;
  }

  render() {
    const { selectedSoftwareId } = this.state;
    const {
      dialogMode,
      onCloseDialog,
      onAddPackage,
    } = this.props;

    return (
      <Dialog
        show={dialogMode === constants.dialog.mode.PACKAGE}
        onCloseAttempt={onCloseDialog}
        trapFocus
        autoFocusFirst={true}
        showCloseButton
      >
        <Header>New Package</Header>
        <Content>
          <form className="inputs">
            <Select
              filter
              add={{
                alwaysVisible: true,
                label: 'Create New Custom Script',
              }}
              onAdd={value => console.log('Add', value)}
              compact
              onSelect={({ key }) => this.setState({ selectedSoftwareId: key })}
              selected={0}
              label="Search for a software"
              data={this.getPackagesList()} />
            <br />
            <br />
            <Toggle defaultChecked>{' Install the latest version'}</Toggle>
            <br />
            <br />
            <ButtonSet style={{ float: 'right' }}>
              <Button onClick={() => onAddPackage(selectedSoftwareId)} blue>{'Add'}</Button>
              <Button onClick={onCloseDialog}>{'Cancel'}</Button>
            </ButtonSet>
          </form>
        </Content>
      </Dialog>
    );
  }
}
