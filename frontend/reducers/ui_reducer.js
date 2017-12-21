import merge from 'lodash/merge';
import { union } from 'lodash';
import { LOGOUT } from '../actions/session_actions';

import { SET_SCROLL_POSITION,
  DISPLAY_PLAYLIST_FORM,
  HIDE_PLAYLIST_FORM,
  HIDE_ALL_DROPDOWNS,
  SHOW_DROPDOWN
 } from '../actions/ui_actions';

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

const defaultState = {
  loading: false,
  scrollPosition: 0,
  dropdowns: []
};

const UIReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_SCROLL_POSITION:
      newState = merge({}, state, { scrollPosition: action.pos });
      return newState;
    case START_LOADING_ALL_ALBUMS:
    case START_LOADING_SINGLE_ALBUM:
    case START_LOADING_ALL_PLAYLISTS:
    case START_LOADING_SINGLE_PLAYLIST:
    case START_LOADING_ALL_TRACKS:
      newState = merge({}, defaultState, { loading: true });
      return newState;
    case RECEIVE_PLAYLISTS:
    case RECEIVE_PLAYLIST:
    case RECEIVE_ALBUM:
    case RECEIVE_ALBUMS:
    case LOGOUT:
      return defaultState;
    case HIDE_ALL_DROPDOWNS:
      newState = merge({}, state, { dropdowns: [] });
      return newState;
    case SHOW_DROPDOWN:
      newState = merge({}, state, { dropdowns: union(state.dropdowns, [action.name]) });
      return newState;
    default:
      return state;
  }
};

export default UIReducer;
