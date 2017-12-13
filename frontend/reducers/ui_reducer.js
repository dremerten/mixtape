import merge from 'lodash/merge';
import { SET_SCROLL_POSITION,
  DISPLAY_PLAYLIST_FORM,
  HIDE_PLAYLIST_FORM
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


const defaultState = {
  loading: false,
  scrollPosition: 0,
  playlistFormVisible: false
};

const UIReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_SCROLL_POSITION:
      newState = merge({}, state, { scrollPosition: action.pos });
      return newState;
    case DISPLAY_PLAYLIST_FORM:
      newState = merge({}, state, { playlistFormVisible: true });
      return newState;
    case HIDE_PLAYLIST_FORM:
      newState = merge({}, state, { playlistFormVisible: false });
      return newState;
    case START_LOADING_ALL_ALBUMS:
    case START_LOADING_SINGLE_ALBUM:
    case START_LOADING_ALL_PLAYLISTS:
    case START_LOADING_SINGLE_PLAYLIST:
      newState = merge({}, defaultState, { loading: true });
      return newState;
    case RECEIVE_PLAYLISTS:
    case RECEIVE_PLAYLIST:
    case RECEIVE_ALBUM:
    case RECEIVE_ALBUMS:
      return defaultState;
    default:
      return state;
  }
};

export default UIReducer;