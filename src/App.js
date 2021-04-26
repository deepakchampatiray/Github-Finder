import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  // Search users using Github API
  searchUser = async (text) => {
    if (!text) {
      this.setState({
        alert: { msg: 'Please enter something', type: 'light' },
      });
      setTimeout(() => {
        this.setState({
          alert: null,
        });
      }, 5000);
      return;
    }
    this.setState({ loading: true, alert: null });
    const result = await fetch(
      `https://api.github.com/search/users?q=${text}&per_page=20&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    this.setState({ users: data.items, loading: false });
  };

  // Get user details
  getUserDetails = async (username) => {
    this.setState({ loading: true });
    const result = await fetch(
      `https://api.github.com/users/${username}
      ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    this.setState({ user: data, loading: false });
  };

  // Get user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const result = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    this.setState({ repos: data, loading: false });
  };
  // Clear previously searched users
  clearUser = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading, user, repos } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar title='Github User Finder' icon='fas fa-code' />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <div className='container'>
                  <Alert alert={this.state.alert} />
                  <Search
                    searchUser={this.searchUser}
                    clear={this.clearUser}
                    showClear={users.length > 0}
                  />
                  <Users users={users} isLoading={loading} />
                </div>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:username'
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUserDetails}
                  getRepos={this.getUserRepos}
                  isLoading={loading}
                  user={user}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
