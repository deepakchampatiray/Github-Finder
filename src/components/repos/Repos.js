import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function Repos(props) {
  //console.log('In Repos', props);
  return (
    <Fragment>
      {props.repos.map((repo) => (
        <RepoItem key={repo.id} name={repo.name} html_url={repo.html_url} />
      ))}
    </Fragment>
  );
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
