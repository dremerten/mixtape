import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLISTS,
  DELETE_PLAYLIST
} from '../actions/playlist_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      newState = merge({}, state, { [action.data.playlist.id]: action.data.playlist });
      return newState;
    case REMOVE_PLAYLISTS:
      return {};
    case RECEIVE_SEARCH_RESULTS:
      return action.data.playlists || {};
    default:
      return state;
  }
};


export default PlaylistsReducer;
