import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import NowPlayingReducer from './now_playing_reducer';
import UIReducer from './ui_reducer';
import AlertsReducer from './alerts_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  nowPlaying: NowPlayingReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  alerts: AlertsReducer,
  ui: UIReducer
});

export default RootReducer;
