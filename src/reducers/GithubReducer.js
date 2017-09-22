import _ from 'lodash';
import {
  GET_GITHUB_USER_DATA,
  GET_GITHUB_USER_REPOS,
  GET_GITHUB_NAMES,
  CLEAR_GITHUB_STATE
  } from '../actions/types';

const initialState = {
  username: "",
  userData: [],
  userRepos: [],
  names: []
}

const githubStateReducer = (state = initialState, action = {}) => {
  // console.log("\n-------------------\n");
  console.log("Step 7. Reducer GithubData state:", state, "Action: ", action);
  switch(action.type) {
    case GET_GITHUB_USER_DATA:
      return { ...state, userData: action.payload }

    case GET_GITHUB_USER_REPOS:
      return { ...state, userRepos: action.repos }

    case GET_GITHUB_NAMES:
      return { ...state, names: action.names }

    case CLEAR_GITHUB_STATE:
      return { ...state, ...initialState }

    default:
      return state;
  }
}

export default githubStateReducer;
