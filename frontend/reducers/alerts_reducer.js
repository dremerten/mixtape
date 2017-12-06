import { RECEIVE_SONG_SAVE_STATUS } from '../actions/track_actions';

const _nullAlerts = [];

const AlertsReducer = (state = _nullAlerts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG_SAVE_STATUS:
      return action.data;
    default:
      return _nullAlerts;
  }
};

export default AlertsReducer;
