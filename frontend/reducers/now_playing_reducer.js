import merge from 'lodash/merge';
import {
  PLAY_AUDIO,
  PAUSE_AUDIO,
  RECEIVE_QUEUE,
  ADD_TRACK_TO_QUEUE,
  CLEAR_QUEUE,
  SET_NEXT_TRACK,
  SET_CURRENT_TRACK
} from '../actions/audio_actions';

const initialState = {
  queue: [],
  currentTrack: null,
  nextTrack: null,
  // trackProgress: 0,
  inProgress: false
};

const NowPlayingReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case PLAY_AUDIO:
      return merge({}, state, { inProgress: true });
    case PAUSE_AUDIO:
      return merge({}, state, { inProgress: false });
    case RECEIVE_QUEUE:
      return merge({}, state, { queue: action.queue });
    case ADD_TRACK_TO_QUEUE:
      newState = merge({}, state);
      newState.queue.push(action.track);
      return newState;
    case CLEAR_QUEUE:
      newState = merge({}, state);
      newState.queue = [];
      return newState;
    case SET_NEXT_TRACK:
      return merge({}, state, { nextTrack: action.track });
    case SET_CURRENT_TRACK:
      return merge({}, state, { currentTrack: action.track });
    default:
      return state;
    }
};

export default NowPlayingReducer;
