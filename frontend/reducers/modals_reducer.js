import merge from 'lodash/merge';
import {
  START_LOADING_MODAL_PLAYLISTS,
  RECEIVE_MODAL_PLAYLISTS
} from '../actions/playlist_actions';

import {
  SHOW_MODAL,
  CLOSE_MODAL,
  CLOSE_ALL_MODALS
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
  let newState = merge({}, state);

  switch(action.type) {
    case START_LOADING_MODAL_PLAYLISTS:
      newState.userPlaylistModal.isFetching = true;
      return newState;
    case RECEIVE_MODAL_PLAYLISTS:
      newState.userPlaylistModal.isFetching = false;
      return newState;
    case SHOW_MODAL:
      if (action.data.trackId) {
        newState.clickedFrom = action.data.trackId;
      }

      newState[action.name].isOpen = true;
      return newState;
    case CLOSE_MODAL:
      newState[action.name].isOpen = false;
      newState.clickedFrom = null;
      return newState;
    case CLOSE_ALL_MODALS:
      return defaultState;
    default:
      return state;
  }
};

export default ModalReducer;
