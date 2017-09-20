import * as types from "./duckduckgo.types";
import fetchJSONP from 'fetch-jsonp';
import axios from 'axios';

const fetchData = value => dispatch => {
  const url = 'http://api.duckduckgo.com/?q=' + value + '&format=json&pretty=1'
  console.log("REQUEST URL", url);

  return fetchJSONP(url).then(response => {
    return response.json();
  }).then(
    request => {
      dispatch({
        type: types.DUCKDUCKGO_SEARCH_REQUEST,
        results: request.RelatedTopics
      });
    },
    error => {
      console.log("Error: Retrieving duckduckgo search api results");
    });
};

export const onSubmit = value => dispatch => {
  dispatch({
    type: types.DUCKDUCKGO_SEARCH_TERM,
    searchTerm: value
  });

  return dispatch(fetchData(value))
};
