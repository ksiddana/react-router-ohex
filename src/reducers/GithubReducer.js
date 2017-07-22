import _ from 'lodash';
import {
  GET_GITHUB_USER_DATA,
  GET_GITHUB_USER_REPOS
  } from '../actions/types';

const githubStateReducer = (state = {}, action) => {
  // console.log("\n-------------------\n");
  console.log("Step 7. Reducer GithubData state:", state, "Action: ", action);
  switch(action.type) {
    case GET_GITHUB_USER_DATA:
      return Object.assign({}, state, { githubData: action.payload });
    case GET_GITHUB_USER_REPOS:
      return Object.assign({}, state, { userRepos: action.payload });
    default:
      return state;
  }
}

export default githubStateReducer;
