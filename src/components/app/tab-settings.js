import React, { Component } from 'react';
import Input from '@jetbrains/ring-ui/components/input/input';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';
import Select from '@jetbrains/ring-ui/components/select/select';
import Panel from '@jetbrains/ring-ui/components/panel/panel';
import Button from '@jetbrains/ring-ui/components/button/button';
import {
  RemoveIcon,
  DownloadIcon,
} from '@jetbrains/ring-ui/components/icon';

import constants from '../../lib/constants';

export default function TabSettings(props) {
  const { boxInfo } = props;

  return (
    <>
      <h1>Box Settings</h1>
      <form className="inputs">
        <Input
          label="Box Name"
          defaultValue={boxInfo.name}
        />
        <Input
          label="Operating System"
          disabled
          defaultValue={constants.box.osList[boxInfo.os].name}
        />
        <Toggle>Private</Toggle>
      </form>
      <h1>Advanced</h1>
      <Button icon={DownloadIcon}>Export Data</Button>
      <br />
      <Button
        icon={RemoveIcon}
        danger
      >
        {'Delete Box'}
      </Button>
      <br />
      <br />
      <ButtonSet>
        <Button blue>{'Save changes'}</Button>
        <Button>{'Cancel'}</Button>
      </ButtonSet>
    </>
  );
}
