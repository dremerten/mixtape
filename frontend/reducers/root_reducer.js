import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import NowPlayingReducer from './now_playing_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  nowPlaying: NowPlayingReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
});

export default RootReducer;
