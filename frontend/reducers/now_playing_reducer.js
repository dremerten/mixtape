import merge from 'lodash/merge';

const initialState = {
  currentTrack: null,
  nextTrack: null,
  trackProgress: 0,
  paused: true
};

const NowPlayingReducer = (state = initialState, action) => {
  Object.freeze(state)
};
