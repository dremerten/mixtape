import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import { RECEIVE_CREATED_PLAYLIST } from '../actions/playlist_actions';
import _ from 'lodash';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case RECEIVE_CREATED_PLAYLIST:
      let playlistIds = [...state.currentUser.playlistIds];
      playlistIds.unshift(action.data.playlist.id);
      return merge({}, state, { currentUser: { playlistIds: playlistIds } });
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
