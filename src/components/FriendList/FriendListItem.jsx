import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const avatarSrc =
    avatar || 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';

  return (
    <li className={styles.friendListItem}>
      <span
        className={
          isOnline ? styles.friendListOnline : styles.friendListOffline
        }
      ></span>
      <img
        className={styles.friendListAvatar}
        src={avatarSrc}
        alt="User avatar"
        width="70"
        height="70"
      />
      <p className={styles.friendListName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
