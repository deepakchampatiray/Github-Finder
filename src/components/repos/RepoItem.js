import React from 'react';
import PropTypes from 'prop-types';

function RepoItem({ name, html_url }) {
  return (
    <div className='card'>
      <a href={html_url}>{name}</a>
    </div>
  );
}
RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};
export default RepoItem;
