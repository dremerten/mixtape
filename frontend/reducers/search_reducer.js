import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';
import { LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

const initialState = {
  tracks: [],
  artists: [],
  albums: [],
  playlists: [],
  top: null
};

const SearchReducer = ( state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState.tracks = Object.keys(action.data.tracks || {});
      newState.artists = Object.keys(action.data.artists || {});
      newState.albums = Object.keys(action.data.albums || {});
      newState.playlists = Object.keys(action.data.playlists || {});
      newState.top = action.data.top;

      return newState;
    case CLEAR_SEARCH_RESULTS:
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default SearchReducer;
