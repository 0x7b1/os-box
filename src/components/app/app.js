import React, { Component } from 'react';
import { Grid, Row, Col } from '@jetbrains/ring-ui/components/grid/grid';
import Heading, { H1, H2, H3, H4 } from '@jetbrains/ring-ui/components/heading/heading';

import EnvList from './env-list';
import EnvInfo from './env-info';
import AppHeader from './app-header';

const envList = [
  {
    name: 'My Phone',
    os: 'iOS 13.0.0',
    dateUpdate: 'Last update 4 months ago',
  },
  {
    name: 'Pipedrive PC',
    os: 'Ubuntu 18.04',
    dateUpdate: 'Last update 4 months ago',
  },
  {
    name: 'Home Desktop',
    os: 'FreeBSD',
    dateUpdate: 'Last update 4 months ago',
  },
];

const userCardInfo = {
  name: <H3>John Smith</H3>,
  login: '@0x7b1',
  email: 'Developer at Veriff',
  avatarUrl: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4',
};

const envSelectedData = {
  name: 'My Phone',
  os: 'iOS 13.0.0',
  dateUpdate: 'Last update 2 days ago',
  readme: `
    Lorem Ipsum is simply dummy text of the printing and
    typesetting
    industry.Lorem Ipsum has been the industry's standard
    dummy text ever
    since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book.It has
    survived not only five
    centuries, but also the leap into electronic
    typesetting, remaining
    essentially unchanged.`,
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
                  envList={envList}
                />
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
