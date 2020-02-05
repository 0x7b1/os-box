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
    const isEditMode = false;

    data.forEach(({ category, items }, i) => {
      result.push({
        rgItemType: List.ListProps.Type.TITLE,
        label: `${category} (${items.length})`,
      });

      items.forEach(({ name, description, pinned }) => {
        result.push({
          label: (
            <Group>
              <Text>{name}</Text>
              <Text info>{description}</Text>
              {
                pinned && (
                  <PinFilledIcon
                    className="ring-icon"
                    color={PinFilledIcon.Color.GRAY}
                    size={PinFilledIcon.Size.Size16}
                  />
                )
              }
            </Group>
          ),
          rgItemType: List.ListProps.Type.ITEM,
          description: (
            <div>
              <ButtonSet>
                <Button icon={LinkIcon} />
                {/* <Button icon={CommentIcon} /> */}
                {/* <Button icon={AttachmentIcon} /> */}
              </ButtonSet>
              <Dropdown
                anchor={<Button icon={MoreOptionsIcon} />}
              >
                <PopupMenu
                  closeOnSelect
                  data={[
                    { label: <Button icon={PinEmptyIcon}>Unpin</Button> },
                    { label: <Button icon={PencilIcon}>Edit</Button> },
                    { label: <Button icon={TrashIcon}>Remove</Button> },
                  ]}
                />
              </Dropdown>
            </div>
          ),
          disabled: true,
        });
      });

      if (isEditMode) {
        result.push({
          label: <Button short text delayed>{'Add New Item'}</Button>,
          rgItemType: List.ListProps.Type.ITEM,
          disabled: true
        });

        result.push({
          rgItemType: List.ListProps.Type.SEPARATOR
        });
      }
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
