import React, { useReducer, useRef } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_USERS,
  RESET_USER,
} from '../types';

let githubClientId = '4492da49bd1eafdd72ea';
let githubClientSecret = 'daad0f9354afffb56b9033365a4e874fd5f838da';

const GithubState = (props) => {
  const timeoutRef = useRef(null);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search users
  const searchUsers = async (input) => {
    if (input !== '') {
      setLoading();
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(async () => {
        const {
          data: { items },
        } = await axios.get(
          `https://api.github.com/search/users?q=${input}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
        );

        dispatch({ type: SEARCH_USERS, payload: items });
      }, 500);
    } else {
      dispatch({ type: CLEAR_USERS });
    }
  };

  // Get user
  const getUser = async (login) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${login}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_USER, payload: data });
  };

  // Get repos
  const getUserRepos = async (login) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=20&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({ type: GET_REPOS, payload: data });
  };

  // Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set list of users
  const setUsers = (data) => {
    dispatch({ type: SET_USERS, payload: data });
  };

  // Reset user
  const resetUser = () => dispatch({ type: RESET_USER });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        setUsers,
        resetUser,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
