import React, { Component } from 'react';
import { Grid, Row, Col } from '@jetbrains/ring-ui/components/grid/grid';

import constants from '../../lib/constants';

import EnvList from './env-list';
import EnvInfo from './env-info';
import AppHeader from './app-header';
import DialogBox from './dialog-box';
import DialogPackage from './dialog-package';
import DialogScreenshot from './dialog-screenshot';
import sampleData from './sample-data';

export default class AppRoot extends Component {
  state = {
    dialogModeOpen: null,
    screenshotPreviewIndex: null,
    selectedBoxIndex: 0,
    userData: {

      name: 'Martin Starr',
      username: '@0x7b1',
      info: 'Developer at Pipedrive',
      avatar: 'https://i.ibb.co/ykR6ss7/gilfoyle.jpg'

    },
    boxList: sampleData,
  };

  onCloseDialog = () => {
    this.setState({ dialogModeOpen: null });
  };

  onAddPackage = packageId => {
    const { boxList, selectedBoxIndex } = this.state;

    const updatedPackages = [...boxList[selectedBoxIndex].packages, packageId];
    const newBoxList = Object.assign([], boxList);
    Object.assign(newBoxList[selectedBoxIndex], {
      packages: updatedPackages
    });

    this.setState({
      boxList: newBoxList
    });

    this.onCloseDialog();
  };

  createNewBox(osId, boxName) {
    return {
      name: boxName,
      os: osId,
      starsCount: 1,
      packages: [],
      scriptFiles: [],
      screenshots: [],
      history: [],
      favorites: []
    };
  }

  onCreateBox = (osId, boxName) => {
    const { boxList } = this.state;

    const newBoxList = Object.assign([], boxList);
    newBoxList.push(this.createNewBox(osId, boxName));

    this.setState({
      boxList: newBoxList
    });

    this.onCloseDialog();
  };

  onPreviewScreenshot = screenshotIdx => {
    this.setState({
      dialogModeOpen: constants.dialog.mode.SCREENSHOT,
      screenshotPreviewIndex: screenshotIdx
    });
  };

  render() {
    const {
      dialogModeOpen,
      boxList,
      selectedBoxIndex,
      userData,
      screenshotPreviewIndex
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
                  onSelectBox={({ id }) =>
                    id !== undefined && this.setState({ selectedBoxIndex: id })
                  }
                  onCreateNewBox={() =>
                    this.setState({
                      dialogModeOpen: constants.dialog.mode.BOX
                    })
                  }
                />
              </Col>
              <Col xs={10}>
                <EnvInfo
                  envData={boxList[selectedBoxIndex]}
                  selectedOS={boxList[selectedBoxIndex].os}
                  tags={[]}
                  onPreviewScreenshot={this.onPreviewScreenshot}
                  onAddNewPackage={() =>
                    this.setState({
                      dialogModeOpen: constants.dialog.mode.PACKAGE
                    })
                  }
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
            selectedPackages={
              selectedBoxIndex === null
                ? []
                : boxList[selectedBoxIndex].packages
            }
          />
          <DialogScreenshot
            urlImage={
              boxList[selectedBoxIndex].screenshots[screenshotPreviewIndex]
            }
            dialogMode={dialogModeOpen}
            onCloseDialog={this.onCloseDialog}
          />
        </div>
      </div>
    );
  }
}
