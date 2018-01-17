export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const PLAY_SINGLE_TRACK = 'PLAY_SINGLE_TRACK';
export const PLAY_ALL_TRACKS = 'PLAY_ALL_TRACKS';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const ADD_TRACK_TO_QUEUE = 'ADD_TRACK_TO_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';
export const PLAY_NEXT_TRACK = 'PLAY_NEXT_TRACK';
export const PLAY_NEXT_FROM_QUEUE = 'PLAY_NEXT_FROM_QUEUE';
export const PLAY_PREVIOUS_TRACK = 'PLAY_PREVIOUS_TRACK';

export const play = () => ({
  type: PLAY
});

export const playSingleTrack = data => ({
  type: PLAY_SINGLE_TRACK, data
});

export const playPreviousTrack = () => ({
  type: PLAY_PREVIOUS_TRACK
});

export const playAllTracks = tracks => ({
  type: PLAY_ALL_TRACKS, tracks
});

export const pause = () => ({
  type: PAUSE
});

export const receiveQueue = queue => ({
  type: RECEIVE_QUEUE, queue
});

export const addTrackToQueue = track => ({
  type: ADD_TRACK_TO_QUEUE, track
});

export const clearQueue = () => ({
  type: CLEAR_QUEUE
});


export const playNextTrack = track => ({
  type: PLAY_NEXT_TRACK, track
});

// export const setCurrentTrack = track => ({
//   type: SET_CURRENT_TRACK, track
// })
