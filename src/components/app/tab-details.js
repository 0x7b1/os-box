import React, { Component } from 'react';
import List from '@jetbrains/ring-ui/components/list/list';
import Group from '@jetbrains/ring-ui/components/group/group';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';
import Panel from '@jetbrains/ring-ui/components/panel/panel';
import Button from '@jetbrains/ring-ui/components/button/button';
import Input from '@jetbrains/ring-ui/components/input/input';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';
import PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';
import Island from '@jetbrains/ring-ui/components/island/island';
import { Grid, Row, Col } from '@jetbrains/ring-ui/components/grid/grid';
import {
  StarFilledIcon,
  ReviewersGraphIcon,
  DownloadIcon,
  PencilIcon,
} from '@jetbrains/ring-ui/components/icon';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import Text from '@jetbrains/ring-ui/components/text/text';
import Checkbox from '@jetbrains/ring-ui/components/checkbox/checkbox';
import Avatar, { Size } from '@jetbrains/ring-ui/components/avatar/avatar';
import Link from '@jetbrains/ring-ui/components/link/link';
import Select from '@jetbrains/ring-ui/components/select/select';

const tags = [
  {
    name: 'Design Team',
  },
  {
    name: 'Pipedrive devs',
  },
];

export default class TabDetails extends Component {
  getDetailsData() {
    const data = [
      {
        category: 'System Graphics',
        items: [
          {
            name: 'i3wm',
            description: 'Tiling Window Manager',
            icon: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4'
          },
          {
            name: 'Materia compact',
            description: 'GTK Theme',
            icon: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4'
          }
        ]
      },
      {
        category: 'Packages to install',
        items: [
          {
            name: 'Firefox',
            description: 'Web Browser',
            icon: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4',
            pinned: true
          },
          {
            name: 'Materia compact',
            description: 'GTK Theme',
            icon: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4'
          }
        ]
      }
    ];

    const result = [];

    data.forEach(({ category, items }, i) => {
      result.push({
        rgItemType: List.ListProps.Type.TITLE,
        label: `${category} (${items.length})`
      });

      items.forEach(({ name, description, icon, pinned }) => {
        const programInfo = {
          name,
          login: description,
          avatarUrl: icon
        };
        result.push({
          label: (
            <Group>
              <Island>
                <div className="cell">
                  <UserCard user={programInfo} data-test="user-card-inline" />
                </div>
              </Island>
            </Group>
          ),
          rgItemType: List.ListProps.Type.ITEM,

        });
      });
    });

    return result;
  }

  render() {
    return (
      <>
        <Grid data-test="distribution">
          <Row>
            <Col xs={2}>
              <Island>
                <UserCard user={{
                  name: 'Microsoft Word 2017',
                  avatarUrl: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4',
                  login: 'Productivity',
                }}
                />
              </Island>
            </Col>
            <Col xs={2}>
              <Island>
                <UserCard user={{
                  name: 'John Smith',
                  avatarUrl: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4',
                  login: 'Productivity',
                }}
                />
              </Island>
            </Col>
            <Col xs={2}>
              <Island>
                <UserCard user={{
                  name: 'John Smith',
                  avatarUrl: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4',
                  login: 'Productivity',
                }}
                />
              </Island>
            </Col>
            <Col xs={2}>
              <UserCard user={{
                name: <Link>Add package</Link>,
                avatarUrl: 'https://image.flaticon.com/icons/svg/679/679720.svg',
                // avatarUrl: 'https://image.flaticon.com/icons/svg/1124/1124173.svg',
              }}
              />
            </Col>
          </Row>
        </Grid>

        <Dialog
          show={false}
          onCloseAttempt={() => {
          }}
          trapFocus
          autoFocusFirst={true}
          showCloseButton
        >
          <Header>Add new app</Header>
          <Content>
            <form className="inputs">
              <Select
                filter
                compact
                selected={0}
                label="Search for a software"
                data={[
                  {
                    label: 'Python',
                    key: 0,
                    type: 'packages',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC',
                  },
                  {
                    label: 'Python',
                    key: 0,
                    type: 'packages',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC',
                  },
                  {
                    label: 'Python',
                    key: 0,
                    type: 'packages',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC',
                  },
                  {
                    label: 'Python',
                    key: 0,
                    type: 'packages',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAIAAACMMcMmAAAAKklEQVRIx2NgGAWjgAbAh/aI4S7t0agdI9COzx00Rwz/z9Ecjdox8uwAACkGSkKIaGlAAAAAAElFTkSuQmCC',
                  },
                ]} />
              <br />
              <br />
              <Toggle defaultChecked>{' Install the last version'}</Toggle>
              <br />
              <br />
              <ButtonSet style={{ float: 'right' }}>
                <Button blue>{'Save'}</Button>
                <Button>{'Cancel'}</Button>
              </ButtonSet>
            </form>
            {/* <List
              data={[
                {
                  icon: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4,',
                  label:
                    <Group>
                      <Checkbox defaultChecked />
                      <Text>{'Jetbrains Pycharm'}</Text>
                      <Text info>{'2019'}</Text>
                    </Group>,
                  rgItemType: List.ListProps.Type.ITEM,
                },
                {
                  icon: 'https://avatars0.githubusercontent.com/u/2180529?s=460&v=4,',
                  label:
                    <Group>
                      <Checkbox defaultChecked />
                      <Text>{'Word 2019'}</Text>
                      <Text info>{'Microsoft'}</Text>
                    </Group>,
                  rgItemType: List.ListProps.Type.ITEM,
                },
              ]}
              shortcuts
            /> */}
          </Content>
        </Dialog>

        {/* <List
          data={this.getDetailsData()}
          shortcuts
          compact
          onSelect={console.log}
        /> */}
      </>
    );
  }
}
