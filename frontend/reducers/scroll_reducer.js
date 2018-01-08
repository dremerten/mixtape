import { SET_SCROLL_POSITION } from '../actions/ui_actions';
import { LOGOUT } from '../actions/session_actions';

const defaultState = 0;

const ScrollReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_SCROLL_POSITION:
      return action.pos;
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default ScrollReducer;
