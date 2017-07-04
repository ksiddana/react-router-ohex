import _ from 'lodash';
import { FETCH_FOOD_ITEMS } from '../actions/types';

const INITIAL_STATE = {
  foodItems: []
};

export default (state = INITIAL_STATE, action) => {
  console.log("STATE OF THE ARTIST REDUCER", state);
  console.log("STATE OF THE ACTION PAYLOAD", action);
  switch (action.type) {
    case FETCH_FOOD_ITEMS:
      return _.extend({}, state, { foodItems: action.payload });
    default:
      return state;
  }
};
