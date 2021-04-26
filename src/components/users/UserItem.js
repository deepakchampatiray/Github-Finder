import React from 'react';
import './UserItems.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { login, avatar_url } = props.user;

  return (
    <div className='card text-center'>
      <img src={avatar_url} alt={`Avatar of ${login}`} className='round-img' />
      <h4>{login}</h4>
      <Link to={`/user/${login}`}>More</Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
  }),
};

export default UserItem;
