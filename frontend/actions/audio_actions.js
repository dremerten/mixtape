export const PLAY_AUDIO = 'PLAY_AUDIO';
export const PAUSE_AUDIO = 'PAUSE_AUDIO';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const ADD_TRACK_TO_QUEUE = 'ADD_TRACK_TO_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';
export const SET_NEXT_TRACK = 'SET_UP_NEXT';
export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK'

export const playAudio = () => ({
  type: PLAY_AUDIO
});

export const pauseAudio = () => ({
  type: PAUSE_AUDIO
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

export const setNextTrack = track => ({
  type: SET_NEXT_TRACK, track
});

export const setCurrentTrack = track => ({
  type: SET_CURRENT_TRACK, track
})
