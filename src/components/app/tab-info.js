import React, { Component } from 'react';
import Group from '@jetbrains/ring-ui/components/group/group';
import Tag from '@jetbrains/ring-ui/components/tag/tag';
import Link from '@jetbrains/ring-ui/components/link/link';
import Island, { Content } from '@jetbrains/ring-ui/components/island/island';

export default function TabInfo(props) {
  const { envDescription, tags } = props;

  return (
    <>
      <Group>
        {
          tags.map(({ name }) => (
            <Tag key={name} readOnly angled>
              <Link
                pseudo
                href="#hash"
              >
                {name}
              </Link>
            </Tag>
          ))
        }
      </Group>
      <br />
      <br />
      <Island className="limited-island" narrow>
        {/* <Header border>
            {'Readme'}
            <Button icon={PencilIcon}>Edit</Button>
          </Header> */}
        <Content>{envDescription}</Content>
      </Island>
    </>
  );
}
