import React, {Component} from 'react';
import List from '@jetbrains/ring-ui/components/list/list';
import Group from '@jetbrains/ring-ui/components/group/group';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';
import PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu';
import {UserCard} from '@jetbrains/ring-ui/components/user-card/user-card';
import Island from '@jetbrains/ring-ui/components/island/island';

import {
  PinFilledIcon,
  PinEmptyIcon,
  TrashIcon,
  LinkIcon,
  MoreOptionsIcon,
  PencilIcon
} from '@jetbrains/ring-ui/components/icon';

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

    data.forEach(({category, items}, i) => {
      result.push({
        rgItemType: List.ListProps.Type.TITLE,
        label: `${category} (${items.length})`
      });

      items.forEach(({name, description, icon, pinned}) => {
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
                  <UserCard user={programInfo} data-test="user-card-inline"/>
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
        <List
          data={this.getDetailsData()}
          shortcuts
          compact
          onSelect={console.log}
        />
      </>
    );
  }
}
