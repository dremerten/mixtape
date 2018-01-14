import * as PlaylistApiUtil from '../util/playlist_api_util';
import { reloadCurrentUser } from './session_actions';
import { clearAllAlerts } from './alert_actions';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLISTS = 'REMOVE_PLAYLISTS';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const START_LOADING_ALL_PLAYLISTS = "START_LOADING_ALL_PLAYLISTS";
export const START_LOADING_MODAL_PLAYLISTS = 'START_LOADING_MODAL_PLAYLISTS';
export const RECEIVE_MODAL_PLAYLISTS = 'RECEIVE_MODAL_PLAYLISTS';
export const START_LOADING_SINGLE_PLAYLIST = 'START_LOADING_SINGLE_PLAYLIST';
export const RECEIVE_PLAYLIST_STATUS = 'RECEIVE_PLAYLIST_STATUS';
export const RECEIVE_CREATED_PLAYLIST = 'RECEIVE_CREATED_PLAYLIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS, playlists
});

export const receivePlaylist = data => ({
  type: RECEIVE_PLAYLIST, data
});

export const receiveCreatedPlaylist = data => ({
  type: RECEIVE_CREATED_PLAYLIST, data
});

export const startLoadingAllPlaylists = () => ({
  type: START_LOADING_ALL_PLAYLISTS
});

export const startLoadingModalPlaylists = () => ({
  type: START_LOADING_MODAL_PLAYLISTS
});

export const receiveModalPlaylists = (playlists) => ({
  type: RECEIVE_MODAL_PLAYLISTS, playlists
});

export const startLoadingSinglePlaylist = () => ({
  type: START_LOADING_SINGLE_PLAYLIST
});

export const removePlaylists = () => ({
  type: REMOVE_PLAYLISTS
});

export const receivePlaylistStatus = data => ({
  type: RECEIVE_PLAYLIST_STATUS, data
});

export const fetchPlaylists = filters => dispatch => {
  dispatch(startLoadingAllPlaylists());
  return PlaylistApiUtil.fetchPlaylists(filters).then(playlists => (
    dispatch(receivePlaylists(playlists))
  ));
};

export const fetchModalPlaylists = () => dispatch => {
  dispatch(startLoadingModalPlaylists());
  return PlaylistApiUtil.fetchPlaylists().then(playlists => (
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
  PlaylistApiUtil.createPlaylist(playlist).then(data => {
    dispatch(receivePlaylistStatus(['Playlist Successfully Created']));
    dispatch(receiveCreatedPlaylist(data));
    return data.playlist.id;
  }, errors => (
    dispatch(receivePlaylistStatus(errors.responseJSON))
  ))
);

export const deletePlaylist = playlistId => dispatch => (
  PlaylistApiUtil.deletePlaylist(playlistId).then(playlist => (
    dispatch(removePlaylist(playlist.id))
  ))
);
