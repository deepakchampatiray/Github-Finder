import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';

class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
  };
  componentDidMount() {
    console.log(this.props);
    this.props.getUser(this.props.match.params.username);
    this.props.getRepos(this.props.match.params.username);
  }

  render() {
    const { isLoading, user, repos } = this.props;
    const {
      name,
      hireable,
      avatar_url,
      location,
      bio,
      html_url,
      login,
      company,
      blog,
      followers,
      following,
      public_gists,
      public_repos,
    } = user;

    return isLoading ? (
      <Spinner />
    ) : (
      <div className='container'>
        <div style={{ display: 'flex' }}>
          <Link to='/' className='btn btn-light'>
            Back to Search
          </Link>
          <span style={{ flex: 1, textAlign: 'end', alignSelf: 'center' }}>
            Hireable:{' '}
            {!!hireable ? (
              <i className='fas fa-check text-success' />
            ) : (
              <i className='fas fa-times text-danger' />
            )}
          </span>
        </div>
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt={`Avatar for ${name}`}
              className='round-img'
              style={{ width: '150px', height: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-primary'>Following: {following}</div>
          <div className='badge badge-primary'>Gist: {public_gists}</div>
          <div className='badge badge-primary'>Repos: {public_repos}</div>
        </div>
        <div className='grid-3'>
          <Repos repos={repos} />
        </div>
      </div>
    );
  }
}

export default User;
