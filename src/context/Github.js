import React, { useState, createContext, useReducer } from 'react';
import GithubReducer, {
  CLEAR,
  GET_REPOS,
  GET_USER,
  SEARCH_USER,
  SET_LOADING,
} from './Github.Reducer';

export const GithubContext = createContext();

export const GithubProvider = (props) => {
  const [state, dispatch] = useReducer(GithubReducer, {
    user: {},
    users: [],
    repos: [],
    loading: false,
  });

  // Search users using Github API
  const searchUser = async (text) => {
    dispatch({ type: SET_LOADING });
    const result = await fetch(
      `https://api.github.com/search/users?q=${text}&per_page=20&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    dispatch({ type: SEARCH_USER, payload: data.items });
  };

  // Clear previously searched users
  const clear = () => {
    dispatch({ type: CLEAR });
  };

  // Get user details
  const getUser = async (username) => {
    dispatch({ type: SET_LOADING });
    const result = await fetch(
      `https://api.github.com/users/${username}
      ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    dispatch({ type: GET_USER, payload: data });
  };

  // Get user repos
  const getRepos = async (username) => {
    dispatch({ type: SET_LOADING });
    const result = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await result.json();
    dispatch({ type: GET_REPOS, payload: data });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        showClear: state.users.length > 0,
        clear,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
