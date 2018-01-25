import { fetchTrack } from './track_actions';
import { isEmpty } from 'lodash';

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
export const STOP_PLAYBACK         = 'STOP_PLAYBACK';

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

export const playFullCollection = data => (dispatch, getState) => {
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

export const fetchTrackThenAddToQueue = trackId => (dispatch, getState) => {
  const state = getState();

  if (Object.keys(state.entities.tracks).includes(trackId)) {
    dispatch(addTrackToQueue(trackId));
  } else {
    dispatch(fetchTrack(trackId)).then(() => (
      dispatch(addTrackToQueue(trackId))
    ));
  }
};

export const clearQueue = () => ({
  type: CLEAR_QUEUE
});

export const stopPlayback = () => ({
  type: STOP_PLAYBACK
});

export const playNextTrack = track => (dispatch, getState ) => {
  const { nowPlaying } = getState();
  const nextTracks = nowPlaying.queue.concat(nowPlaying.nextTracks);

  if (!nowPlaying.currentTrack) {
    return;
  } else if (nowPlaying.shuffleState && isEmpty(nowPlaying.shuffledTracks)) {
    dispatch(stopPlayback());
  } else if (isEmpty(nowPlaying.queue)) {
    dispatch({ type: PLAY_NEXT_TRACK, track });
  } else if (isEmpty(nextTracks) && !nowPlaying.shuffleState) {
    dispatch(stopPlayback());
  } else {
    dispatch(playNextFromQueue(track));
  }
};

export const playNextFromQueue = track => ({
  type: PLAY_NEXT_FROM_QUEUE, track
});
