import merge from 'lodash/merge';
import { isEmpty } from 'lodash';
import { LOGOUT } from '../actions/session_actions';
import {
  PLAY,
  PAUSE,
  PLAY_SINGLE_TRACK,
  PLAY_ALL_TRACKS,
  RECEIVE_QUEUE,
  ADD_TRACK_TO_QUEUE,
  CLEAR_QUEUE,
  PLAY_NEXT_TRACK,
  PLAY_PREVIOUS_TRACK
} from '../actions/audio_actions';

const initialState = {
  queue: [],
  currentTrack: null,
  history: [],
  inProgress: false,
  shuffle: false,
  repeat: 0,
  shuffledTracks: [],
  nextTracks: []
};

const NowPlayingReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let upNext = newState.queue.concat(newState.nextTracks);

  switch(action.type) {
    case PLAY:
      newState.inProgress = true;
      return newState;
    case PAUSE:
      newState.inProgress = false;
      return newState;
    case RECEIVE_QUEUE:
      newState.queue = action.queue;
      return newState;
    case ADD_TRACK_TO_QUEUE:
      newState.queue.push(action.track);
      return newState;
    case CLEAR_QUEUE:
      newState.queue = [];
      return newState;
    case PLAY_NEXT_TRACK:
      newState.history.push(newState.currentTrack);

      newState.currentTrack = upNext.shift() || null;

      if (isEmpty(newState.queue)) {
        newState.nextTracks.shift();
      } else {
        newState.queue.shift();
      }

      if (!newState.currentTrack) newState.inProgress = false;
  
      return newState;
    case PLAY_SINGLE_TRACK:
      [
        newState.currentTrack,
        newState.nextTracks,
        newState.history
      ] = [
        action.track,
        action.nextTracks,
        action.history
      ];

      newState.inProgress = true;

      return newState;
    case PLAY_ALL_TRACKS:
      let queue = action.tracks.slice(1);
      let currentTrack = action.tracks[0];
      let nextTrack = action.tracks[1];
      let inProgress = true;
      return { queue, currentTrack, nextTrack, inProgress };
    case LOGOUT:
      return initialState;
    case PLAY_PREVIOUS_TRACK:
      if (isEmpty(newState.history)) return initialState;

      newState.nextTracks.unshift(newState.currentTrack);
      newState.currentTrack = newState.history[newState.history.length - 1];
      newState.history.pop();

      return newState;
    default:
      return state;
    }
};

export default NowPlayingReducer;
