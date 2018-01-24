export const PLAY                  = 'PLAY';
export const PAUSE                 = 'PAUSE';
export const PLAY_SINGLE_TRACK     = 'PLAY_SINGLE_TRACK';
export const PLAY_ALL_TRACKS       = 'PLAY_ALL_TRACKS';
export const RECEIVE_QUEUE         = 'RECEIVE_QUEUE';
export const ADD_TRACK_TO_QUEUE    = 'ADD_TRACK_TO_QUEUE';
export const CLEAR_QUEUE           = 'CLEAR_QUEUE';
export const PLAY_NEXT_TRACK       = 'PLAY_NEXT_TRACK';
export const PLAY_NEXT_FROM_QUEUE  = 'PLAY_NEXT_FROM_QUEUE';
export const PLAY_PREVIOUS_TRACK   = 'PLAY_PREVIOUS_TRACK';
export const TOGGLE_SHUFFLE        = 'TOGGLE_SHUFFLE';
export const TOGGLE_REPEAT         = 'TOGGLE_REPEAT';

export const play = () => ({
  type: PLAY
});

export const playSingleTrack = data => (dispatch, getState) => {
  const state = getState();

  if (state.nowPlaying.currentTrack !== data.currentTrack) {
    dispatch({ type: PLAY_SINGLE_TRACK, data });
  } else if (state.nowPlaying.inProgress) {
    dispatch(pause());
  } else {
    dispatch(play());
  }
};

export const playFullCollection = () => (dispatch, getState) => {
  const state = getState();

  if (state.nowPlaying.context !== data.context) {
    dispatch({ type: PLAY_SINGLE_TRACK, data});
  } else if (state.nowPlaying.inProgress) {
    dispatch(pause());
  } else {
    dispatch(play());
  }
};

export const toggleShuffle = () => ({
  type: TOGGLE_SHUFFLE
});

export const toggleRepeat = () => ({
  type: TOGGLE_REPEAT
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

export const addTrackToQueue = track => ({
  type: ADD_TRACK_TO_QUEUE, track
});

export const clearQueue = () => ({
  type: CLEAR_QUEUE
});


export const playNextTrack = track => ({
  type: PLAY_NEXT_TRACK, track
});
