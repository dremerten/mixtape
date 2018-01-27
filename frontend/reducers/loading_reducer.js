import { merge } from 'lodash';
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

import {
  START_LOADING_ARTIST,
  START_LOADING_ARTISTS,
  RECEIVE_ARTIST
} from '../actions/artist_actions';

import { START_LOADING_ALL_TRACKS } from '../actions/track_actions';

const defaultState = {
  global: false,
  albums: false,
};

const LoadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case START_LOADING_ALL_ALBUMS:
    case START_LOADING_SINGLE_ALBUM:
      newState.albums = true;
      return newState;
    case START_LOADING_ALL_PLAYLISTS:
    case START_LOADING_SINGLE_PLAYLIST:
    case START_LOADING_ALL_TRACKS:
    case START_LOADING_ARTIST:
      newState.global = true;
      return newState;
    case RECEIVE_PLAYLISTS:
    case RECEIVE_PLAYLIST:
      newState.global = false;
      return newState;
    case RECEIVE_ALBUM:
    case RECEIVE_ALBUMS:
      newState.albums = false;
      return newState;
    case RECEIVE_ARTIST:
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default LoadingReducer;
