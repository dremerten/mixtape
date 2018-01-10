import { RECEIVE_ARTIST, START_LOADING_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ArtistReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ARTIST:
      newState = merge({}, state, { [action.data.artist.id]: action.data.artist });
      return newState;
    default:
      return state;
  }
};

export default ArtistReducer;
