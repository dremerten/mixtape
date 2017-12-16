import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { LOGOUT } from '../actions/session_actions';

const initialState = {
  topResults: []
};

const SearchReducer = ( state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      let topResults = action.data.topResults;
      return { topResults };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default SearchReducer;
