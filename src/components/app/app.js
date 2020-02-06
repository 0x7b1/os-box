import React, { Component } from 'react';
import { Grid, Row, Col } from '@jetbrains/ring-ui/components/grid/grid';

import EnvList from './env-list';
import EnvInfo from './env-info';
import AppHeader from './app-header';

const envList = [
  {
    name: 'Desktop Computer',
    os: 'Ubuntu 18.04',
    dateUpdate: 'Last update 4 months ago',
  },
  {
    name: 'Mobile Phone',
    os: 'iOS 13.0.0',
    dateUpdate: 'Last update 4 months ago',
  },
];

const userCardInfo = {
  name: 'John Smith',
  login: 'Developer at Veriff',
  avatarUrl: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4',
};

const envSelectedData = {
  name: 'Desktop Computer',
  os: 'Ubuntu 18.04',
  dateUpdate: 'Last update 4 months ago',
};

const tags = [
  {
    name: 'Ubuntu',
  },
  {
    name: 'i3wm',
  },
];

export default class AppRoot extends Component {
  render() {
    return (
      <div>
        <AppHeader isLogged />
        <div className="app-content">
          <Grid data-test="distribution">
            <Row around="xs">
              <Col xs={2} >
                <EnvList
                  userCardInfo={userCardInfo}
                  envList={envList} />
              </Col>
              <Col xs={10}>
                <EnvInfo
                  envData={envSelectedData}
                  tags={tags}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
