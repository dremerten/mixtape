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
