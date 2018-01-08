import { LOGOUT } from '../actions/session_actions';

import {
  START_LOADING_ALL_ALBUMS,
  START_LOADING_SINGLE_ALBUM,
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS
} from '../actions/album_actions';

import {
  START_LOADING_ALL_PLAYLISTS,
  START_LOADING_SINGLE_PLAYLIST,
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST
} from '../actions/playlist_actions';

import { START_LOADING_ALL_TRACKS } from '../actions/track_actions';

const defaultState = false;

const LoadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_LOADING_ALL_ALBUMS:
    case START_LOADING_SINGLE_ALBUM:
    case START_LOADING_ALL_PLAYLISTS:
    case START_LOADING_SINGLE_PLAYLIST:
    case START_LOADING_ALL_TRACKS:
      return true;
    case RECEIVE_PLAYLISTS:
    case RECEIVE_PLAYLIST:
    case RECEIVE_ALBUM:
    case RECEIVE_ALBUMS:
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default LoadingReducer;
