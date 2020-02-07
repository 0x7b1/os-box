import React, { Component } from 'react';
import Dialog from '@jetbrains/ring-ui/components/dialog/dialog';
import { Header, Content } from '@jetbrains/ring-ui/components/island/island';
import Button from '@jetbrains/ring-ui/components/button/button';
import List from '@jetbrains/ring-ui/components/list/list';
import Group from '@jetbrains/ring-ui/components/group/group';
import Text from '@jetbrains/ring-ui/components/text/text';
import { DownloadIcon } from '@jetbrains/ring-ui/components/icon';
import Avatar, { Size } from '@jetbrains/ring-ui/components/avatar/avatar';
import Heading, { H1, H2, H3, H4 } from '@jetbrains/ring-ui/components/heading/heading';

export default function TabScreenshots(props) {
  return (
    <>
      {/* <Dialog
        show={false}
        onCloseAttempt={() => {
        }}
        trapFocus
        autoFocusFirst={true}
        showCloseButton
      >
        <Header>Materia compact</Header>
        <Content>
          <List
            data=
            {[
              {
                label: 'Files (2)',
                rgItemType: List.ListProps.Type.TITLE
              },
              {
                label:
                  <Group><Text>{'gcs_amd64.deb'}</Text><Text
                    info>{'123MB'}</Text></Group>,
                rgItemType: List.ListProps.Type.ITEM,
                description: <Button
                  icon={DownloadIcon}>Download</Button>
              },
              {
                label:
                  <Group><Text>{'clion_2.3.3.deb'}</Text><Text
                    info>{'3MB'}</Text></Group>,
                rgItemType: List.ListProps.Type.ITEM,
                description: <Button
                  icon={DownloadIcon}>Download</Button>
              }
            ]}
            shortcuts
          />
        </Content>
      </Dialog> */}
      <List
        data={[
          {
            label: (

              <Avatar size={256} url={'https://www.androidpolice.com/wp-content/uploads/2019/03/Screenshot_20190313-160401.jpg'} />

            ),
            description: <H4>{'Landing'}</H4>,
            rgItemType: List.ListProps.Type.ITEM,
          },
          {
            label: (

              <Avatar size={256} url={'https://www.androidpolice.com/wp-content/uploads/2019/03/Screenshot_20190313-160401.jpg'} />

            ),
            description: <H4>{'envData.name'}</H4>,
            rgItemType: List.ListProps.Type.ITEM,
          },
          {
            label: (

              <Avatar size={256} url={'https://www.androidpolice.com/wp-content/uploads/2019/03/Screenshot_20190313-160401.jpg'} />

            ),
            description: <H4>{'envData.name'}</H4>,
            rgItemType: List.ListProps.Type.ITEM,
          },
        ]}
      />
    </>
  );
}
