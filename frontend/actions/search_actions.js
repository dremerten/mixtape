import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';
export const REMOVE_SEARCH_ERRORS = 'REMOVE_SEARCH_ERRORS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const receiveSearchResults = data => ({
  type: RECEIVE_SEARCH_RESULTS, data
});

export const receiveSearchErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS, errors
});

export const removeSearchErrors = () => ({
  type: REMOVE_SEARCH_ERRORS
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});

export const fetchResults = query => dispatch => (
  SearchApiUtil.fetchResults(query).then(results => (
    dispatch(receiveSearchResults(results))
  ), err => (
    dispatch(receiveSearchErrors(err.responseJSON))
  ))
);
