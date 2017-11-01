import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS, playlists
});

export const receivePlaylist = data => ({
  type: RECEIVE_PLAYLIST, data
});

export const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST, playlistId
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
