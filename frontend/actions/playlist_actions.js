import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLISTS = 'REMOVE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS, playlists
});

export const receivePlaylist = data => ({
  type: RECEIVE_PLAYLIST, data
});

// TODO: Make into thunk action

export const deletePlaylist = playlistId => ({
  type: DELETE_PLAYLIST, playlistId
});

export const removePlaylists = () => ({
  type: REMOVE_PLAYLISTS
});

export const fetchPlaylists = filters => dispatch => (
  PlaylistApiUtil.fetchPlaylists(filters).then(playlists => (
    dispatch(receivePlaylists(playlists))
  ))
);

export const fetchPlaylist = playlistId => dispatch => (
  PlaylistApiUtil.fetchPlaylist(playlistId).then(playlist => (
    dispatch(receivePlaylist(playlist))
  ))
);
