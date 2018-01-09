import { RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ArtistReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, { [action.data.artist.id]: action.data.artist });
    default:
      return state;
  }
};

export default ArtistReducer;
