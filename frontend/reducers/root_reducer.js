import { combineReducers } from "redux";
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import player from './now_playing_reducer';
import ui from './ui_reducer';
import alerts from './alerts_reducer';
import search from './search_reducer';

const RootReducer = combineReducers({
  entities,
  player,
  search,
  session,
  errors,
  alerts,
  ui
});

export default RootReducer;
