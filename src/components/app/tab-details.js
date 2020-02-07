import React, { Component } from 'react';
import List from '@jetbrains/ring-ui/components/list/list';
import Button from '@jetbrains/ring-ui/components/button/button';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';
import Island from '@jetbrains/ring-ui/components/island/island';
import { Grid, Row, Col } from '@jetbrains/ring-ui/components/grid/grid';
import {
  DownloadIcon,
  FileIcon,
} from '@jetbrains/ring-ui/components/icon';
import Code from '@jetbrains/ring-ui/components/code/code';
import Icon from '@jetbrains/ring-ui/components/icon/icon';
import Link from '@jetbrains/ring-ui/components/link/link';

import constants from '../../lib/constants';

export default class TabDetails extends Component {
  state = {
    selectedScriptIndex: null,
  };

  renderPackageList(packagesList, selectedOS) {
    const osType = constants.box.osList[selectedOS].type;
    const packages = constants[`packages_${osType}`];

    return packagesList.map((packageId, id) => (
      <Col key={id} xs={2}>
        <Island>
          <UserCard
            user={{
              name: packages[packageId].name,
              name: packages[packageId].name,
              avatarUrl: packages[packageId].icon,
              login: `${packages[packageId].description.slice(0, 20)}...`,
            }}
          />
        </Island>
      </Col>
    ));
  }

  getScriptFilesList(scriptFilesList) {
    const dataList = [];
    dataList.push({
      rgItemType: List.ListProps.Type.TITLE,
      label: 'Custom Scripts',
    });

    scriptFilesList.forEach(({ filename }, i) => {
      dataList.push({
        key: i,
        label: filename,
        rgItemType: List.ListProps.Type.ITEM,
        glyph: FileIcon,
        iconSize: Icon.Size.Size16,
      });
    });

    return dataList;
  }

  renderScriptPreview(scriptFilesList) {
    const { selectedScriptIndex } = this.state;
    const filePreviewData = scriptFilesList[selectedScriptIndex];

    return (
      <Code
        language={filePreviewData.language}
        code={filePreviewData.content}
      />
    );
  }

  render() {
    const {
      onAddNewPackage,
      packagesList = [],
      scriptFilesList = [],
      selectedOS,
    } = this.props;

    return (
      <>
        <Grid data-test="distribution">
          <Row>
            {this.renderPackageList(packagesList, selectedOS)}
            <Col xs={2}>
              <UserCard user={{
                name: <Link onClick={onAddNewPackage}>Add Package</Link>,
                avatarUrl: 'https://image.flaticon.com/icons/svg/679/679720.svg',
              }}
              />
            </Col>
          </Row>
          {
            scriptFilesList.length
              ? (
                <Row>
                  <Col xs={12}>
                    <List
                      onSelect={({ key }) => this.setState({ selectedScriptIndex: key })}
                      data={this.getScriptFilesList(scriptFilesList)}
                      compact
                    />
                    {
                      this.state.selectedScriptIndex !== null
                        ? (
                          <>
                            {this.renderScriptPreview(scriptFilesList)}
                            <Button icon={DownloadIcon}>Download File</Button>
                          </>
                        )
                        : null
                    }
                  </Col>
                </Row>
              )
              : null
          }
        </Grid>
      </>
    );
  }
}
