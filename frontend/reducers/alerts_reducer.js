import { RECEIVE_SONG_SAVE_STATUS } from '../actions/track_actions';
import { RECEIVE_PLAYLIST_STATUS } from '../actions/playlist_actions';
import { CLEAR_ALL_ALERTS } from '../actions/alert_actions';

const _nullAlerts = [];

const AlertsReducer = (state = _nullAlerts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG_SAVE_STATUS:
    case RECEIVE_PLAYLIST_STATUS:
      return action.data;
    case CLEAR_ALL_ALERTS:
      return _nullAlerts;
    default:
      return _nullAlerts;
  }
};

export default AlertsReducer;
