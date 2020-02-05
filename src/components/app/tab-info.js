import React, { Component } from 'react';
import Group from '@jetbrains/ring-ui/components/group/group';
import Tag from '@jetbrains/ring-ui/components/tag/tag';
import Link from '@jetbrains/ring-ui/components/link/link';
import Island, { Content } from '@jetbrains/ring-ui/components/island/island';

const tags = [
  {
    name: 'Ubuntu',
  },
  {
    name: 'i3wm',
  },
];

const envDescription = `
Lorem Ipsum is simply dummy text of the printing and
typesetting
industry.Lorem Ipsum has been the industry's standard
dummy text ever
since the 1500s, when an unknown printer took a galley
of type and
            scrambled it to make a type specimen book.It has
survived not only five
centuries, but also the leap into electronic
typesetting, remaining
essentially unchanged.`;

export default function TabInfo(props) {
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
