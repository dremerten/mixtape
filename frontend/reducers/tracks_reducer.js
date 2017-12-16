import merge from 'lodash/merge';
import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACKS
} from '../actions/track_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { LOGOUT } from '../actions/session_actions';

const _nullTracks = {}

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      let newState = ({}, state, { [actions.track.id]: action.track});
      return newState;
    case REMOVE_TRACKS:
    case LOGOUT:
      return _nullTracks;
    case RECEIVE_PLAYLIST:
      return action.data.tracks || _nullTracks;
    case RECEIVE_ALBUM:
      return action.data.tracks || _nullTracks;
    case RECEIVE_SEARCH_RESULTS:
      return action.data.tracks || _nullTracks;
    default:
      return state;
  }
};

export default TrackReducer;
