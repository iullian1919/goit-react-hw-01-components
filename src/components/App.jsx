import React from 'react';
import Profile from './Profile';
import user from './Profile/user.json';
import Statistics from './Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory';

const App = () => {
  return (
    <main>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </main>
  );
};

export { App };
