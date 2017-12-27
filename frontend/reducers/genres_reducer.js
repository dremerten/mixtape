import {
  RECEIVE_GENRE,
  RECEIVE_GENRES,
  REMOVE_GENRES
} from '../actions/genre_actions';

const GenresReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_GENRES:
      return action.genres;
    case REMOVE_GENRES:
      return {};
    default:
      return state;
  }
};

export default GenresReducer;
