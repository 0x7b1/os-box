import React, { Component } from 'react';
import { Grid, Row, Col } from '@jetbrains/ring-ui/components/grid/grid';
import Heading, { H1, H2, H3, H4 } from '@jetbrains/ring-ui/components/heading/heading';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import Select from '@jetbrains/ring-ui/components/select/select';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';

import constants from '../../lib/constants';

import EnvList from './env-list';
import EnvInfo from './env-info';
import AppHeader from './app-header';
import DialogBox from './dialog-box';
import DialogPackage from './dialog-package';
import DialogScreenshot from './dialog-screenshot';

export default class AppRoot extends Component {
  state = {
    dialogModeOpen: null,
    screenshotPreviewIndex: null,
    selectedBoxIndex: 0,
    userData: {
      name: 'John Smith',
      username: '@0x7b1',
      info: 'Developer at Pipedrive',
      avatar: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4',
    },
    boxList: [
      {
        name: 'My Phone',
        os: constants.box.osList.ANDROID.id,
        isPrivate: false,
        starsCount: 10,
        packages: [
          // 'WORD2007',
        ],
        scriptFiles: [
          {
            filename: 'i3config0.sh',
            language: 'bash',
            content: `
              #!/bin/bash

              ./symlink.sh
              ./aptinstall.sh
              ./programs.sh
              ./desktop.sh

              # Get all upgrades
              sudo apt upgrade -y

              # See our bash changes
              source ~/.bashrc

              # Fun hello
              figlet "... and we're back!" | lolcat`
          },
          {
            filename: 'mycredentials.json',
            language: 'json',
            content: `
              {
                "type": "user",
                "id": "7c78428f-7334-4885-a247-135ab0b17c3b",
                "name": "Carsten Ringe",
                "login": "cringe",
                "profile": {
                  "avatar": {
                    "type": "defaultavatar",
                    "url": "https://hub.jetbrains.com/api/rest/avatar/7c78428f-7334-4885-a247-135ab0b17c3b"
                  }
                },
                "key": "7c78428f-7334-4885-a247-135ab0b17c3b",
                "label": "Carsten Ringe",
                "avatar": "https://hub.jetbrains.com/api/rest/avatar/7c78428f-7334-4885-a247-135ab0b17c3b",
                "description": "cringe"
              }`
          }
        ],
        screenshots: [
          'https://www.androidpolice.com/wp-content/uploads/2019/03/Screenshot_20190313-160401.jpg',
          'https://media.idownloadblog.com/wp-content/uploads/2017/08/ScreenshotXI.jpg',
        ],
        history: [
          {
            event: 'New installation made on a new machine',
            date: '01/03/2020 12:38',
          },
          {
            event: 'Added Microsoft Office',
            date: '01/02/2020 12:38',
          },
          {
            event: 'Creation of this box!',
            date: '01/02/2020 12:34',
          },
        ],
        favorites: [

        ],
      },
      this.createNewBox(constants.box.osList.WINDOWS.id, 'Pipedrive PC'),
      this.createNewBox(constants.box.osList.LINUX.id, 'Home Desktop'),
    ],
  };

  onCloseDialog = () => {
    this.setState({ dialogModeOpen: null });
  }

  onAddPackage = packageId => {
    const { boxList, selectedBoxIndex } = this.state;

    const updatedPackages = [...boxList[selectedBoxIndex].packages, packageId];
    const newBoxList = Object.assign([], boxList);
    Object.assign(newBoxList[selectedBoxIndex], {
      packages: updatedPackages,
    });

    this.setState({
      boxList: newBoxList,
    });

    this.onCloseDialog();
  }

  createNewBox(osId, boxName) {
    return {
      name: boxName,
      os: osId,
      starsCount: 0,
      packages: [],
      scriptFiles: [],
      screenshots: [],
      history: [],
      favorites: [],
    };
  }

  onCreateBox = (osId, boxName) => {
    const { boxList } = this.state;

    const newBoxList = Object.assign([], boxList);
    newBoxList.push(this.createNewBox(osId, boxName));

    this.setState({
      boxList: newBoxList,
    });

    this.onCloseDialog();
  }

  onPreviewScreenshot = screenshotIdx => {
    this.setState({
      dialogModeOpen: constants.dialog.mode.SCREENSHOT,
      screenshotPreviewIndex: screenshotIdx,
    });
  }

  render() {
    const {
      dialogModeOpen,
      boxList,
      selectedBoxIndex,
      userData,
      screenshotPreviewIndex,
    } = this.state;

    return (
      <div>
        <AppHeader isLogged />
        <div className="app-content">
          <Grid data-test="distribution">
            <Row around="xs">
              <Col xs={2}>
                <EnvList
                  userCardInfo={userData}
                  envList={boxList}
                  selectedBoxIndex={selectedBoxIndex}
                  onSelectBox={({ id }) => id !== undefined && this.setState({ selectedBoxIndex: id })}
                  onCreateNewBox={() => this.setState({ dialogModeOpen: constants.dialog.mode.BOX })}
                />
              </Col>
              <Col xs={10}>
                <EnvInfo
                  envData={boxList[selectedBoxIndex]}
                  tags={[]}
                  onPreviewScreenshot={this.onPreviewScreenshot}
                  onAddNewPackage={() => this.setState({ dialogModeOpen: constants.dialog.mode.PACKAGE })}
                />
              </Col>
            </Row>
          </Grid>
          <DialogBox
            dialogMode={dialogModeOpen}
            onCloseDialog={this.onCloseDialog}
            onCreateBox={this.onCreateBox}
          />
          <DialogPackage
            selectedOS={boxList[selectedBoxIndex].os}
            dialogMode={dialogModeOpen}
            onAddPackage={this.onAddPackage}
            onCloseDialog={this.onCloseDialog}
            selectedPackages={selectedBoxIndex === null ? [] : boxList[selectedBoxIndex].packages}
          />
          <DialogScreenshot
            urlImage={boxList[selectedBoxIndex].screenshots[screenshotPreviewIndex]}
            dialogMode={dialogModeOpen}
            onCloseDialog={this.onCloseDialog}
          />
        </div>
      </div>
    );
  }
}
