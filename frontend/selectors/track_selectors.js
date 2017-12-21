export const allTracks = tracks => (
  Object.keys(tracks).map(id => tracks[id])
);
