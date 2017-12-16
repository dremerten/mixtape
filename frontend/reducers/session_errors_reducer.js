import { RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { LOGOUT } from '../actions/session_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case REMOVE_SESSION_ERRORS:
    case LOGOUT:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
