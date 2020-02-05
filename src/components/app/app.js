import React, { Component } from 'react';
import { Grid, Row, Col } from '@jetbrains/ring-ui/components/grid/grid';
import List from '@jetbrains/ring-ui/components/list/list';
import Text from '@jetbrains/ring-ui/components/text/text';
import Group from '@jetbrains/ring-ui/components/group/group';

import EnvList from './env-list';
import EnvInfo from './env-info';
import AppHeader from './app-header';


const listDataGeneral = [
  {
    label: 'Desktop Computer',
    rgItemType: List.ListProps.Type.ITEM,
    details: 'Ubuntu 18.04'
  },
  {
    label: 'Mobile Phone',
    rgItemType: List.ListProps.Type.ITEM,
    details: (
      <Group>
        <Text info>iOS 12.3.2</Text>
      </Group>
    )
  }
];

const userCardInfo = {
  name: '0x7b1',
  login: '2 envs | 4 favorites',
  avatarUrl: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4',
};


export default class AppRoot extends Component {
  render() {
    return (
      <div>
        <AppHeader isLogged />
        <div className="app-content">
          <Grid data-test="distribution">
            <Row around="xs">
              <Col xs>
                <EnvList
                  userCardInfo={userCardInfo}
                  listDataGeneral={listDataGeneral} />
              </Col>
              <Col xs={9}>
                <EnvInfo />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
