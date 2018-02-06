import { merge } from 'lodash';

import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_actions';

import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const defaultState = {};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_USER:
      merge(newState, action.users);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_USERS:
      return merge(newState, action.users);
    case RECEIVE_SEARCH_RESULTS:
      return merge(newState, action.data.users);
    default:
      return state;
  }
};

export default UserReducer;
