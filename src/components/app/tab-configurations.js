import React, { Component } from 'react';
import Button from '@jetbrains/ring-ui/components/button/button';
import Code from '@jetbrains/ring-ui/components/code/code';
import Icon from '@jetbrains/ring-ui/components/icon/icon';
import List from '@jetbrains/ring-ui/components/list/list';
import {
  FolderIcon,
  DownloadIcon,
  FileIcon,
} from '@jetbrains/ring-ui/components/icon';

export default function TabConfigurations(props) {
  return (
    <>
      <List
        data={[
          {
            'rgItemType': List.ListProps.Type.TITLE,
            label: 'System Graphics / i3wm',
            description: 'Sync Status'
          },
          {
            'label': 'blocks',
            'rgItemType': List.ListProps.Type.ITEM,
            glyph: FolderIcon,
            checkbox: true,
            iconSize: Icon.Size.Size16
          },
          {
            'label': 'scripts',
            'rgItemType': List.ListProps.Type.ITEM,
            glyph: FolderIcon,
            checkbox: true,
            iconSize: Icon.Size.Size16
          },
          {
            'label': 'config',
            'rgItemType': List.ListProps.Type.ITEM,
            glyph: FileIcon,
            checkbox: true,
            iconSize: Icon.Size.Size16
          },
          {
            'label': 'i3blocks.conf',
            'rgItemType': List.ListProps.Type.ITEM,
            glyph: FileIcon,
            checkbox: true,
            iconSize: Icon.Size.Size16
          }
        ]}
        compact
        onSelect={console.log.bind(console)}
      />
      <Code
        language='bash'
        code={`
                        command=$HOME/.config/i3/blocks/$BLOCK_NAME
                        separator_block_width=15
                        markup=none

                        [volume]
                        instance=Master
                        interval=3
                        signal=10

                        [battery]
                        interval=30

                        [bandwidth]
                        interval=30

                        [calendar]
                        interval=once

                        [time]
                        command=date '+%H:%M'
                        interval=30
                      `}
      />
      <Button icon={DownloadIcon}>Download File</Button>
    </>
  );
}
