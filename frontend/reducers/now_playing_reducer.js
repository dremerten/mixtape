import merge from 'lodash/merge';
import { isEmpty } from 'lodash';
import { LOGOUT } from '../actions/session_actions';
import { shuffle } from '../util/helper_methods';
import {
  PLAY,
  PAUSE,
  PLAY_SINGLE_TRACK,
  PLAY_ALL_TRACKS,
  RECEIVE_QUEUE,
  ADD_TRACK_TO_QUEUE,
  CLEAR_QUEUE,
  PLAY_NEXT_TRACK,
  PLAY_PREVIOUS_TRACK,
  TOGGLE_SHUFFLE,
  TOGGLE_REPEAT
} from '../actions/audio_actions';

const initialState = {
  queue: [],
  currentTrack: null,
  inProgress: false,
  shuffleState: false,
  repeat: 0,
  nextTracks: [],
  shuffledTracks: [],
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
      debugger
      return newState;
    case CLEAR_QUEUE:
      newState.queue = [];
      return newState;
    case TOGGLE_REPEAT:
      newState.repeat = (newState.repeat + 1) % 3;
      return newState;
    case TOGGLE_SHUFFLE:
      newState.shuffleState = !newState.shuffleState;
      return newState;
    case PLAY_NEXT_TRACK:
      if (!newState.currentTrack) return newState;

      newState.shuffledTracks = shuffle([...newState.nextTracks]);
      newState.history.push(newState.currentTrack);

      newState.repeat === 1 &&
      isEmpty(newState.nextTracks) &&
      (newState.nextTracks = newState.history);

      if (newState.shuffleState) {
        newState.currentTrack = newState.queue.shift() || newState.shuffledTracks.shift();
      } else {
        newState.currentTrack = newState.queue.shift() || newState.nextTracks.shift();
      }

      !newState.currentTrack && newState.repeat === 0 && (newState.inProgress = false);


      return newState;
    case PLAY_SINGLE_TRACK:
      merge(newState, action.data);
      newState.inProgress = true;

      return newState;
    case LOGOUT:
      return initialState;
    case PLAY_PREVIOUS_TRACK:
      if (isEmpty(newState.history) || !newState.currentTrack) return initialState;

      newState.nextTracks.unshift(newState.currentTrack);
      newState.currentTrack = newState.history.pop();

      return newState;
    default:
      return state;
    }
};

export default NowPlayingReducer;
