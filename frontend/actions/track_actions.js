import * as TrackApiUtil from '../util/track_api_util';
import { clearAllAlerts } from './alert_actions';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACKS = 'REMOVE_TRACKS';
export const RECEIVE_SONG_SAVE_STATUS = 'RECEIVE_SONG_SAVE_STATUS';
export const START_LOADING_ALL_TRACKS = 'START_LOADING_ALL_TRACKS';
export const START_FETCHING_MODAL_PLAYLISTS = 'START_FETCHING_MODAL_PLAYLISTS';
export const RECEIVE_MODAL_PLAYLISTS = 'RECEIVE_MODAL_PLAYLISTS';
export const RECEIVE_TRACK_SAVE = 'RECEIVE_TRACK_SAVE';
export const REMOVE_TRACK_SAVE = 'REMOVE_TRACK_SAVE';

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS, tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK, track
});

// export const removeTracks = () => ({
//   type: REMOVE_TRACKS
// });

export const receiveSongSaveStatus = data => ({
  type: RECEIVE_SONG_SAVE_STATUS, data
});

export const receiveTrackSave = trackId => ({
  type: RECEIVE_TRACK_SAVE, trackId
});

export const removeTrackSave = trackId => ({
  type: REMOVE_TRACK_SAVE, trackId
});

export const fetchTracks = filters => dispatch => (
  TrackApiUtil.fetchTracks(filters).then(tracks =>
    dispatch(receiveTracks(tracks))
  )
);

export const fetchTracksForUser = () => dispatch => {
  dispatch({ type: START_LOADING_ALL_TRACKS});
  TrackApiUtil.fetchTracksForUser().then(tracks => (
    dispatch(receiveTracks(tracks))
  ));
};

export const fetchTrack = id => dispatch => (
  TrackApiUtil.fetchTrack(id).then(track =>
    dispatch(receiveTrack(track))
  )
);

export const saveTrack = id => dispatch => (
  TrackApiUtil.saveTrack(id).then((response) => {
    dispatch(receiveTrackSave(response.data));
    dispatch(receiveSongSaveStatus(response.message));
  }, (err) => {
    dispatch(receiveSongSaveStatus(err.message));
  }).then(
    setTimeout(() => dispatch(clearAllAlerts()), 2500)
  )
);

export const removeTrack = id => dispatch => (
  TrackApiUtil.removeTrack(id).then((response) => {
    dispatch(removeTrackSave(response.data));
    dispatch(receiveSongSaveStatus(response.message));
  }, (err) => {
    dispatch(receiveSongSaveStatus(err.message));
  }).then(
    setTimeout(() => dispatch(clearAllAlerts()), 2500)
  )
);

export const saveTrackToPlaylist = (trackId, playlistId) => dispatch => {
  TrackApiUtil.saveTrackToPlaylist(trackId, playlistId).then(response => (
    dispatch(receiveSongSaveStatus(response))
  )).then(
    setTimeout(() => dispatch(clearAllAlerts()), 2500)
  );
};
