import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';
import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  RECEIVE_CREATED_PLAYLIST,
  RECEIVE_MODAL_PLAYLISTS,
  REMOVE_PLAYLISTS,
  DELETE_PLAYLIST
} from '../actions/playlist_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const initialState = {
  currentUser: {},
  byId: {}
};

const PlaylistsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      newState = merge({}, state, { byId: action.playlists });
      return newState;
    case RECEIVE_PLAYLIST:
    case RECEIVE_CREATED_PLAYLIST:
      let newId = { byId:  { [action.data.playlist.id]: action.data.playlist } };
      newState = merge({}, state, newId);
      debugger
      return newState;
    case REMOVE_PLAYLISTS:
      newState = Object.assign({}, state, initialState);
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      newState = merge({}, state, { byId: action.data.playlists });
      return newState;
    case LOGOUT:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};


export default PlaylistsReducer;
