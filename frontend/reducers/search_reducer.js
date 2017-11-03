import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const initialState = {
  topResults: []
};

const SearchReducer = ( state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      let topResults = action.data.topResults;
      return { topResults };
    default:
      return state;
  }
};

export default SearchReducer;
