import merge from 'lodash/merge';
import { isEmpty } from 'lodash';
import { LOGOUT } from '../actions/session_actions';
import { shuffle } from '../util/helper_methods';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

import {
  PLAY,
  PAUSE,
  PLAY_SINGLE_TRACK,
  PLAY_ALL_TRACKS,
  RECEIVE_QUEUE,
  ADD_TRACK_TO_QUEUE,
  CLEAR_QUEUE,
  PLAY_NEXT_TRACK,
  PLAY_NEXT_FROM_QUEUE,
  PLAY_PREVIOUS_TRACK,
  TOGGLE_SHUFFLE,
  TOGGLE_REPEAT,
  STOP_PLAYBACK
} from '../actions/audio_actions';

const initialState = {
  queue: [],
  context: null,
  currentTrack: null,
  inProgress: false,
  shuffleState: false,
  repeat: 0,
  nextTracks: [],
  shuffledTracks: [],
  playedFromQueue: false
};

const NowPlayingReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case PLAY:
      newState.inProgress = true;
      return newState;
    case PAUSE:
      newState.inProgress = false;
      return newState;
    case ADD_TRACK_TO_QUEUE:
      newState.queue.push(action.track);
      return newState;
    case CLEAR_QUEUE:
      newState.queue = [];
      return newState;
    case TOGGLE_REPEAT:
      newState.repeat = (newState.repeat + 1) % 3;
      return newState;
    case STOP_PLAYBACK:
      newState.nextTracks = newState.history.concat(newState.nextTracks);
      newState.history = [];
      newState.currentTrack = newState.nextTracks.shift();

      if (newState.shuffleState) newState.shuffledTracks = shuffle([...newState.nextTracks]);
      if (!newState.repeat) newState.inProgress = false;

      return newState;
    case TOGGLE_SHUFFLE:
      newState.shuffleState = !newState.shuffleState;
      const sliceIndex = newState.nextTracks.indexOf(newState.currentTrack);

      if (newState.shuffleState) {
        const allTracks = newState.history.concat(newState.nextTracks);
        newState.shuffledTracks = shuffle([...allTracks]);
      } else {
        newState.shuffledTracks = [];
        newState.history = newState.nextTracks.slice(0, sliceIndex);
        newState.nextTracks.splice(0, sliceIndex + 1);
      }

      return newState;
    case PLAY_NEXT_FROM_QUEUE:
      if (!newState.playedFromQueue) newState.history.push(newState.currentTrack);
      newState.currentTrack = newState.queue.shift();
      newState.playedFromQueue = true;
      return newState;
    case PLAY_NEXT_TRACK:
      if (newState.repeat === 2) newState.repeat -= 1;

      if (!newState.playedFromQueue) newState.history.push(newState.currentTrack);

      if (newState.shuffleState) {
        newState.currentTrack = newState.shuffledTracks.shift();
      } else {
        newState.currentTrack = newState.nextTracks.shift();
      }

      newState.playedFromQueue = false;

      return newState;
    case PLAY_SINGLE_TRACK:
      Object.assign(newState, action.data);
      newState.shuffledTracks = [];
      newState.inProgress = true;

      return newState;
    case LOGOUT:
      return initialState;
    case PLAY_PREVIOUS_TRACK:
      if (isEmpty(newState.history) || !newState.currentTrack) return initialState;
      if (!newState.playedFromQueue) newState.nextTracks.unshift(newState.currentTrack);

      newState.currentTrack = newState.history.pop();

      return newState;
    default:
      return state;
    }
};

export default NowPlayingReducer;
