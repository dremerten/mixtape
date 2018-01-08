import merge from 'lodash/merge';
import { union } from 'lodash';
import { LOGOUT } from '../actions/session_actions';
import { combineReducers } from 'redux';
import loading from './loading_reducer';
import scroll from './scroll_reducer';
import modals from './modals_reducer';
import dropdowns from './dropdowns_reducer';

export default combineReducers({
  loading,
  scroll,
  modals,
  dropdowns
});
// import { SET_SCROLL_POSITION,
//   DISPLAY_PLAYLIST_FORM,
//   HIDE_PLAYLIST_FORM,
//   HIDE_ALL_DROPDOWNS,
//   SHOW_DROPDOWN
//  } from '../actions/ui_actions';
//
// import {
//   START_LOADING_ALL_ALBUMS,
//   START_LOADING_SINGLE_ALBUM,
//   RECEIVE_ALBUM,
//   RECEIVE_ALBUMS
// } from '../actions/album_actions';
//
// import {
//   START_LOADING_ALL_PLAYLISTS,
//   START_LOADING_SINGLE_PLAYLIST,
//   RECEIVE_PLAYLISTS,
//   RECEIVE_PLAYLIST
// } from '../actions/playlist_actions';
//
// import { START_LOADING_ALL_TRACKS } from '../actions/track_actions';

// const defaultState = {
//   loading: false,
//   scrollPosition: 0,
//   dropdowns: {},
//   modals: {
//     userPlaylistModal: {
//       isOpen: false,
//       isFetching: false
//     },
//     newPlaylistModal: {
//       isOpen: false
//     }
//   }
// };
//
// const UIReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   let newState;
//   switch(action.type) {
//     case SET_SCROLL_POSITION:
//       newState = merge({}, state, { scrollPosition: action.pos });
//       return newState;
//     case START_LOADING_ALL_ALBUMS:
//     case START_LOADING_SINGLE_ALBUM:
//     case START_LOADING_ALL_PLAYLISTS:
//     case START_LOADING_SINGLE_PLAYLIST:
//     case START_LOADING_ALL_TRACKS:
//       newState = merge({}, state, { loading: true });
//       return newState;
//     case RECEIVE_PLAYLISTS:
//     case RECEIVE_PLAYLIST:
//     case RECEIVE_ALBUM:
//     case RECEIVE_ALBUMS:
//       newState = merge({}, state, { loading: false });
//       return newState;
//     case HIDE_ALL_DROPDOWNS:
//       newState = Object.assign({}, state, { dropdowns: {} });
//       return newState;
//     case SHOW_DROPDOWN:
//       newState = merge({}, state, { dropdowns: { [action.name]: true } });
//       return newState;
//     case LOGOUT:
//       return defaultState;
//     default:
//       return state;
//   }
// };
//
// export default UIReducer;
