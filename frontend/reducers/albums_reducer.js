import merge from 'lodash/merge';
import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUMS
} from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { LOGOUT } from '../actions/session_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const AlbumReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      newState = merge({}, state, { [action.data.album.id]: action.data.album });
      return newState;
    case REMOVE_ALBUMS:
    case LOGOUT:
      return {};
    case RECEIVE_SEARCH_RESULTS:
    case RECEIVE_ARTIST:
      return merge({}, state, action.data.albums || {});
    default:
      return state;
  }
};

export default AlbumReducer;
