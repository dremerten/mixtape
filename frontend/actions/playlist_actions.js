import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLISTS = 'REMOVE_PLAYLISTS';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const START_LOADING_ALL_PLAYLISTS = "START_LOADING_ALL_PLAYLISTS";
export const START_LOADING_SINGLE_PLAYLIST = 'START_LOADING_SINGLE_PLAYLIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS, playlists
});

export const receivePlaylist = data => ({
  type: RECEIVE_PLAYLIST, data
});

export const startLoadingAllPlaylists = () => ({
  type: START_LOADING_ALL_PLAYLISTS
});

export const startLoadingModalPlaylists = () => ({
  type: START_LOADING_MODAL_PLAYLISTS
});

export const startLoadingSinglePlaylist = () => ({
  type: START_LOADING_SINGLE_PLAYLIST
});

export const removePlaylists = () => ({
  type: REMOVE_PLAYLISTS
});

export const fetchPlaylists = filters => dispatch => {
  dispatch(startLoadingAllPlaylists());
  return PlaylistApiUtil.fetchPlaylists(filters).then(playlists => (
    dispatch(receivePlaylists(playlists))
  ));
};

export const fetchModalPlaylists = () => dispatch => {
  dispatch(startLoadingAllPlaylists());
  return PlaylistApiUtil.fetchPlaylists(filters).then(playlists => (
    dispatch(receivePlaylists(playlists))
  ));
};

export const fetchPlaylist = playlistId => dispatch => {
  dispatch(startLoadingSinglePlaylist());
  PlaylistApiUtil.fetchPlaylist(playlistId).then(playlist => (
    dispatch(receivePlaylist(playlist))
  ));
};

export const createPlaylist = playlist => dispatch => (
  PlaylistApiUtil.createPlaylist(playlist).then(playlist => (
    dispatch(receivePlaylist(playlist))
  ))
);

export const deletePlaylist = playlistId => dispatch => (
  PlaylistApiUtil.deletePlaylist(playlistId).then(playlist => (
    dispatch(removePlaylist(playlist.id))
  ))
);
