import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import { GithubContext } from '../../context/Github';

const Users = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
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

// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   isLoading: PropTypes.bool,
// };

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gridGap: '1rem',
};
export default Users;
