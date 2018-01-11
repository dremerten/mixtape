export const userArtist = (state) => {
  const mappedArtists = state.session.currentUser.followIds.artists.map(id => (
    state.entities.artists[id]
  ));

  return (mappedArtists.includes(undefined) ? [] : mappedArtists);
};

export const shouldFetchArtists = (artistIds, state) => {
  let shouldFetch = false;

  artistIds.forEach(id => {
    if (!state.entities.artists[id]) {
      shouldFetch = true;
    }
  });

  return shouldFetch;
};
