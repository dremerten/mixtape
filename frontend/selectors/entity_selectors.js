export const selectEntity = (state, ownProps) => {
  const itemType = Object.keys(ownProps.match.params)[0];
  let entity;

  if (itemType === 'playlistId') {
    entity = state.entities.playlists.byId[ownProps.match.params.playlistId];
  } else {
    entity = state.entities.albums[ownProps.match.params.albumId];
  }

  return entity || {};
};
