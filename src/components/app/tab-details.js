import React, { Component } from 'react';
import List from '@jetbrains/ring-ui/components/list/list';
import Group from '@jetbrains/ring-ui/components/group/group';
import Text from '@jetbrains/ring-ui/components/text/text';
import Button from '@jetbrains/ring-ui/components/button/button';
import ButtonSet from '@jetbrains/ring-ui/components/button-set/button-set';
import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';
import PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu';

import {
  PinFilledIcon,
  PinEmptyIcon,
  TrashIcon,
  LinkIcon,
  MoreOptionsIcon,
  PencilIcon,
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
          },
          {
            name: 'Materia compact',
            description: 'GTK Theme',
          },
        ]
      },
      {
        category: 'Packages to install',
        items: [
          {
            name: 'Firefox',
            description: 'Web Browser',
            pinned: true,
          },
          {
            name: 'Materia compact',
            description: 'GTK Theme',
          },
        ]
      }
    ];

    const result = [];

    data.forEach(({ category, items }, i) => {
      result.push({
        rgItemType: List.ListProps.Type.TITLE,
        label: `${category} (${items.length})`,
      });

      items.forEach(({ name, description }) => {
        result.push({
          label: (
            <Group>
              <Text>{name}</Text>
              <Text info>{description}</Text>
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
