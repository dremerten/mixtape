export const isSavedAlbum = (albumId, state) => {
  return state.session.currentUser.followIds.albums.includes(albumId);
};
