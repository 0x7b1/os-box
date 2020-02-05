import React, { Component } from 'react';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';

export default function TabFavorites(props) {
  return (
    <>
      <UserCard user={{
        login: '4 envs',
        name: 'erik_kowalski',
        avatarUrl: 'https://img.discogs.com/vpyftS0ZUxFOucjqChuzgp8M8TM=/360x360/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5442-1452060953-8390.png.jpg',
        href: '#'
      }}
      />
    </>
  );
}
