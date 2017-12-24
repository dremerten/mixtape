import { isEmpty } from 'lodash';

export const allTracks = tracks => (
  Object.keys(tracks).map(id => tracks[id])
);

export const userTracks = (state) => {
  if (_.isEmpty(state.entities.tracks)) return ([]);
  
  return state.session.currentUser.trackIds.map(id => state.entities.tracks[id]);
};


export const isCurrentTrack = (state, track) => {
  if (!state.nowPlaying.currentTrack) return false;

  return state.nowPlaying.currentTrack.id === track.id;
};
