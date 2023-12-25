import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';

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
    </main>
  );
};

export { App };
