import React from 'react';
import { UserCard } from '@jetbrains/ring-ui/components/user-card/user-card';
import List from '@jetbrains/ring-ui/components/list/list';

export default function EnvList(props) {
  const {
    userCardInfo,
    listDataGeneral,
  } = props;

  return (
    <div className="cell">
      <UserCard user={userCardInfo} />
      <br />
      {/* <h2>0x7b1</h2> */}
      <List
        data={listDataGeneral}
        shortcuts
        onSelect={console.log}
      />
    </div>
  );
}
