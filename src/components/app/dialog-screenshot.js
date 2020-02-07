import React, { Component } from 'react';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import Select from '@jetbrains/ring-ui/components/select/select';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';

import constants from '../../lib/constants';


export default function DialogScreenshot(props) {
  const {
    dialogMode,
    onCloseDialog,
    urlImage,
  } = props;

  return (
    <Dialog
      show={dialogMode === constants.dialog.mode.SCREENSHOT}
      onCloseAttempt={onCloseDialog}
      showCloseButton
    >
      <Content>
        <img
          width="100%"
          src={urlImage}
        />
      </Content>
    </Dialog >
  );
}
