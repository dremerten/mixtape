export const RECEIVE_SONG_SAVE_SUCCESS = 'SAVE_TRACK_SUCCESS';
export const RECEIVE_SONG_SAVE_ERROR = 'SAVE_TRACK_ERROR';

export const receiveSongSaveSuccess = data => ({
  type: RECEIVE_SONG_SAVE_SUCCESS, data
});

export const receiveSongSaveError = error => ({
  type: RECEIVE_SONG_SAVE_ERROR, error
});
