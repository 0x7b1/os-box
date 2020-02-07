import React, {Component} from 'react';
import {UserCard} from '@jetbrains/ring-ui/components/user-card/user-card';

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
      <br/>
      <UserCard user={{
        login: '20 envs',
        name: 'karl_laane',
        avatarUrl: 'https://simonwiddowson.typepad.com/files/grass-360x360.jpg',
        href: '#'
      }}
      />
      <br/>
      <UserCard user={{
        login: '9 envs',
        name: 'amanda_hodges',
        avatarUrl: 'https://www.caribjournal.com/wp-content/uploads/2018/07/gr-360x360.jpg',
        href: '#'
      }}
      />
      <br/>
      <UserCard user={{
        login: '25 envs',
        name: 'jack_randall',
        avatarUrl: 'https://www.vanadiumcorp.com/wp-content/uploads/2020/01/Competition-energy-storage-1536x1536-500-360x360.jpg',
        href: '#'
      }}
      />
      <br/>
      <UserCard user={{
        login: '6 envs',
        name: 'josh_churchill',
        avatarUrl: 'https://www.de-cix.net/Files/b6dfb34adbbbdb325593ee3f297e21a31d94adab/IX-API_Logo_V2_RGB-942x942-360x360.jpg',
        href: '#'
      }}
      />
      <br/>
      <UserCard user={{
        login: '2 envs',
        name: 'mary_slater',
        avatarUrl: 'https://www.caribjournal.com/wp-content/uploads/2018/01/best-islands-360x360.jpg',
        href: '#'
      }}
      />
    </>
  );
}
