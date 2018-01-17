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
  PLAY_NEXT_TRACK
} from '../actions/audio_actions';

const initialState = {
  queue: [],
  currentTrack: null,
  // nextTrack: null,
  inProgress: false,
  nextTracks: []
};


// Pressing play on the song on a Playlist or Album both fetches the song and stores the context
// What should the context look like?
const NowPlayingReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

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
      const upNext = newState.queue.concat(newState.nextTracks);

      newState.currentTrack = upNext.shift() || null;

      if (isEmpty(newState.queue)) {
        newState.nextTracks.shift();
      } else {
        newState.queue.shift();
      }

      return newState;
    case PLAY_SINGLE_TRACK:
      newState.currentTrack = action.data.track;
      newState.nextTracks = action.data.context;
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
    default:
      return state;
    }
};

export default NowPlayingReducer;
