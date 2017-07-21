import _ from 'lodash';
import { GET_GITHUB_USER_DATA } from '../actions/types';

const githubData = (state = {}, action) => {
  switch(action.type) {
    case GET_GITHUB_USER_DATA:
      return Object.assign({}, state, { payload: action.payload });
    default:
      return state;
  }
}

export default githubData;
