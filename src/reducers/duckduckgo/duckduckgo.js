import * as types from "./duckduckgo.types";

const initialState = {
  searchTerm: "",
  results: []
};


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case types.DUCKDUCKGO_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };

    case types.DUCKDUCKGO_SEARCH_REQUEST:
      console.log("Action:", action);
      return { ...state, results: action.results };

    default:
      return state;
  }
};
