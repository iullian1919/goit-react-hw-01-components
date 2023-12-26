import React from 'react';
import Profile from './Profile';
import user from './Profile/user.json';
import Statistics from './Statistics';
import data from './Statistics/data.json';

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

      <Statistics title="Upload stats" stats={data} />
    </main>
  );
};

export { App };
