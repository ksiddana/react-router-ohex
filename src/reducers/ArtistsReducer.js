import _ from 'lodash';
import {
  SEARCH_ARTISTS,
  FIND_ARTIST,
  RESET_ARTIST,
  FETCH_FOOD_ITEMS
} from '../actions/types';

const INITIAL_STATE = {
  all: [],
  offset: 0,
  limit: 20,
  count: 0,
  foodItems: []
};

export default (state = INITIAL_STATE, action) => {
  console.log("STATE OF THE ARTIST REDUCER", state);
  console.log("STATE OF THE ACTION PAYLOAD", action);
  switch (action.type) {
    case FETCH_FOOD_ITEMS:
      return _.extend({}, state, { foodItems: action.payload });
    case SEARCH_ARTISTS:
      return _.extend({}, state, {
        count: action.payload.length,
        all: action.payload
      })
    case FIND_ARTIST:
      return _.extend({}, state, { artist: action.payload });
    case RESET_ARTIST:
      return _.extend({}, state, { artist: null });
    default:
      return state;
  }
};
