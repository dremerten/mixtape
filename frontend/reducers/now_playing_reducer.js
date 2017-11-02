import merge from 'lodash/merge';
import {
  PLAY,
  PAUSE,
  PLAY_SINGLE_TRACK,
  PLAY_ALL_TRACKS,
  RECEIVE_QUEUE,
  ADD_TRACK_TO_QUEUE,
  CLEAR_QUEUE,
  PLAY_NEXT_TRACK
} from '../actions/audio_actions';

const initialState = {
  queue: [],
  currentTrack: null,
  nextTrack: null,
  inProgress: false
};

const NowPlayingReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case PLAY:
      return merge({}, state, { inProgress: true });
    case PAUSE:
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
    case PLAY_NEXT_TRACK:
      newState = merge({}, state);
      newState.currentTrack = newState.queue.shift;
      newState.nextTrack = newState.queue[0];
      return newState;
    case PLAY_SINGLE_TRACK:
      return merge({}, state, { currentTrack: action.track, inProgress: true });
    case PLAY_ALL_TRACKS:
      let queue = action.tracks.slice(1);
      let currentTrack = action.tracks[0];
      let nextTrack = action.tracks[1];
      let inProgress = true;
      return { queue, currentTracl, nextTrack, inProgress };
    default:
      return state;
    }
};

export default NowPlayingReducer;
