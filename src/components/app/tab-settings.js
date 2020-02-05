import React, { Component } from 'react';
import Input from '@jetbrains/ring-ui/components/input/input';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';
import Panel from '@jetbrains/ring-ui/components/panel/panel';
import Button from '@jetbrains/ring-ui/components/button/button';
import {
  RemoveIcon,
  DownloadIcon,
} from '@jetbrains/ring-ui/components/icon';

export default function TabSettings(props) {
  return (
    <>
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
    </>
  );
}
