import React, { useState, createContext } from 'react';

export const GithubContext = createContext();

export const GithubProvider = (props) => {
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState({});
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  // Search users using Github API
  const searchUser = async (text) => {
    setLoading(true);
    const result = await fetch(
      `https://api.github.com/search/users?q=${text}&per_page=20&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    setUsers(data.items);
    setLoading(false);
  };

  // Clear previously searched users
  const clear = () => {
    setLoading(false);
    setUsers([]);
  };

  // Get user details
  const getUser = async (username) => {
    setLoading(true);
    const result = await fetch(
      `https://api.github.com/users/${username}
      ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    setUser(data);
    setLoading(false);
  };

  // Get user repos
  const getRepos = async (username) => {
    setLoading(true);
    const result = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    setLoading(false);
    setRepos(data);
  };
  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        repos,
        loading,
        searchUser,
        showClear: users.length > 0,
        clear,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
