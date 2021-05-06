import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_USERS,
  RESET_USER,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case RESET_USER:
      return {
        ...state,
        user: null,
        repos: null,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
