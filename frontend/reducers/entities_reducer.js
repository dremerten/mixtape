import { combineReducers } from 'redux';
import PlaylistReducer from './playlists_reducer';
import TrackReducer from './tracks_reducer';
import AlbumReducer from './albums_reducer';
import SearchReducer from './search_reducer';
import GenresReducer from './genres_reducer';

const EntitiesReducer = combineReducers({
  playlists: PlaylistReducer,
  tracks: TrackReducer,
  albums: AlbumReducer,
  search: SearchReducer,
  genres: GenresReducer
});

export default EntitiesReducer;
