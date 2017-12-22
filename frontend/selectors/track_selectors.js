export const allTracks = tracks => (
  Object.keys(tracks).map(id => tracks[id])
);

export const isCurrentTrack = (state, track) => {
  if (!state.nowPlaying.currentTrack) return false;

  return state.nowPlaying.currentTrack.id === track.id;
};
