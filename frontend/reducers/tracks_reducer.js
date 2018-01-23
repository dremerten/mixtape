import merge from 'lodash/merge';
import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACKS
} from '../actions/track_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { LOGOUT } from '../actions/session_actions';
import { ADD_TRACK_TO_QUEUE } from '../actions/audio_actions';

const _nullTracks = {};

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case ADD_TRACK_TO_QUEUE:
    case RECEIVE_TRACK:
      newState[action.track.id] = action.track;
      return newState;
    case REMOVE_TRACKS:
    case LOGOUT:
      return _nullTracks;
    case RECEIVE_PLAYLIST:
    case RECEIVE_ARTIST:
    case RECEIVE_ALBUM:
    case RECEIVE_SEARCH_RESULTS:
      const results = action.data.tracks || _nullTracks;
      return merge(newState, results);
    default:
      return state;
  }
};

export default TrackReducer;
