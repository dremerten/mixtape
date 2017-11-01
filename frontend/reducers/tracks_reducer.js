import merge from 'lodash/merge';
import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACKS
} from '../actions/track_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

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
      return _nullTracks;
    case RECEIVE_PLAYLIST:
      return action.data.tracks || _nullTracks;
    default:
      return state;
  }
};

export default TrackReducer;
