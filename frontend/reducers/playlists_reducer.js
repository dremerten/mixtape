import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLISTS,
  DELETE_PLAYLIST
} from '../actions/playlist_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const initialState = {
  byId: {},
};

const PlaylistsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      newState = merge({}, state, { byId: action.playlists });
      return newState;
    case RECEIVE_PLAYLIST:
      newState = { byId:  { [action.data.playlist.id]: action.data.playlist } };
      return merge({}, state, newState);
    case REMOVE_PLAYLISTS:
      return merge({}, state, initialState);
    case RECEIVE_SEARCH_RESULTS:
      newState = merge({}, state, { byId: action.data.playlists });
      return newState;
    default:
      return state;
  }
};


export default PlaylistsReducer;
