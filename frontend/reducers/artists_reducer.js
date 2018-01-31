import merge from 'lodash/merge';

import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS
} from '../actions/artist_actions';

import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const defaultState = {};

const ArtistReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ARTIST:
      newState[action.data.artist.id] = action.data.artist;
      return newState;
    case RECEIVE_ARTISTS:
      return merge(newState, action.artists);
    case RECEIVE_SEARCH_RESULTS:
      return merge(newState, action.data.artists);
    default:
      return state;
  }
};

export default ArtistReducer;
