import {
  HIDE_ALL_DROPDOWNS,
  SHOW_DROPDOWN
} from '../actions/ui_actions';

import merge from 'lodash/merge';
import { LOGOUT } from '../actions/session_actions';

const defaultState = {};

const DropdownsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SHOW_DROPDOWN:
      return { [action.name]: true };
    case HIDE_ALL_DROPDOWNS:
      return defaultState;
    default:
      return state;
  }
};

export default DropdownsReducer;
