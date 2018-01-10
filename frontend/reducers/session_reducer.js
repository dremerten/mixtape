import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import { RECEIVE_CREATED_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import _ from 'lodash';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case RECEIVE_CREATED_PLAYLIST:
      newState.currentUser.playlistIds.push(action.data.playlist.id);
      return newState;
    case RECEIVE_FOLLOW:
      newState.currentUser.followIds[action.data.followableType]
                          .push(action.data.followableId);

      return newState;
    case REMOVE_FOLLOW:
      const rmIndex = newState.currentUser.followIds[action.data.followableType]
                                          .indexOf(action.data.followableId);

      newState.currentUser.followIds[action.data.followableType]
                          .splice(rmIndex, 1);
      return newState;
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
