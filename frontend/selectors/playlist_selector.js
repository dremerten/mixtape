import _ from 'lodash';

export const userPlaylists = (state) => {
  const mappedPlaylists = state.session.currentUser.playlistIds.map(id => (
    state.entities.playlists.byId[id]
  ));

  return (mappedPlaylists.includes(undefined) ? [] : mappedPlaylists);
};

export const staticPlaylists = (state) => {
  const mappedPlaylists = state.entities.playlists.siteGenerated.map(id => (
    state.entities.playlists.byId[id]
  ));

  return (mappedPlaylists.includes(undefined) ? [] : mappedPlaylists);
};

export const shouldFetchPlaylists = (playlistIds, state) => {
  let shouldFetch = false;

  playlistIds.forEach(id => {
    if (!state.entities.playlists.byId[id]) {
      shouldFetch = true;
    }
  });

  return shouldFetch;
};

export const playlistTracks = (playlist, state) => {
  if (!playlist) return [];

  return playlist.trackIds.map(id => state.entities.tracks[id]);
};

export const isUserPlaylist = (playlist, state) => {
  return state.session.currentUser.id === playlist.id;
};

export const isFollowedPlaylist = (playlist, state) => {
  return state.session.currentUser.followIds.playlists.includes(playlist.id);
};
