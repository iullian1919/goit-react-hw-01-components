import React from 'react';
import PropTypes from 'prop-types';
import classes from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profileDescription}>
        <img src={avatar} alt="User avatar" className={classes.profileAvatar} />
        <p className={classes.profileName}>{username}</p>
        <p className={classes.profileTag}>{tag}</p>
        <p className={classes.profileLocation}>{location}</p>
      </div>

      <ul className={classes.profileStats}>
        <li>
          <span className={classes.profileLabel}>Followers</span>
          <span className={classes.profileQuantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={classes.profileLabel}>Views</span>
          <span className={classes.profileQuantity}>{stats.views}</span>
        </li>
        <li>
          <span className={classes.profileLabel}>Likes</span>
          <span className={classes.profileQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
