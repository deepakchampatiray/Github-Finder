import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const Users = ({ users, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div style={usersStyle}>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gridGap: '1rem',
};
export default Users;
