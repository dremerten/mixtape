import merge from 'lodash/merge';
import {
  START_LOADING_MODAL_PLAYLISTS,
  RECEIVE_MODAL_PLAYLISTS
} from '../actions/playlist_actions';

import {
  SHOW_MODAL,
  CLOSE_MODAL
} from '../actions/ui_actions';

const defaultState = {
  clickedFrom: null,
  userPlaylistModal: {
    isOpen: false,
    isFetching: false
  },
  newPlaylistModal: {
    isOpen: false
  }
};

const ModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case START_LOADING_MODAL_PLAYLISTS:
      newState = merge({}, state, { userPlaylistModal: { isFetching: true }});
      return newState;
    case RECEIVE_MODAL_PLAYLISTS:
      newState = merge({}, state, { userPlaylistModal: { isFetching: false }});
      return newState;
    case SHOW_MODAL:
      newState = merge({}, state, { [action.name]: { isOpen: true }, clickedFrom: action.data.trackId});
      return newState;
    case CLOSE_MODAL:
      newState = merge({}, state, { [action.name]: { isOpen: false }});
      return newState;
    default:
      return state;
  }
};

export default ModalReducer;
