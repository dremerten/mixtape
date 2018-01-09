import { isEmpty } from 'lodash';

export const allTracks = tracks => (
  Object.keys(tracks).map(id => tracks[id])
);

export const userTracks = (state) => {
  const mappedTracks = state.session.currentUser.trackIds.map(id => (
    state.entities.tracks[id]
  ));

  return (mappedTracks.includes(undefined) ? [] : mappedTracks);
};

export const shouldFetchTracks = (trackIds, state) => {
  let shouldFetch = false;

  trackIds.forEach(id => {
    if (!state.entities.tracks[id]) {
      shouldFetch = true;
    }
  });

  return shouldFetch;
};

export const isCurrentTrack = (state, track) => {
  if (!state.nowPlaying.currentTrack) return false;

  return state.nowPlaying.currentTrack.id === track.id;
};
