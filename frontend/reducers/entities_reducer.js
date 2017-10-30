import { combineReducers } from 'redux';
import PlaylistReducer from './playlists_reducer';
import TrackReducer from './tracks_reducer';

const EntitiesReducer = combineReducers({
  playlists: PlaylistReducer,
  tracks: TrackReducer
});

export default EntitiesReducer;
