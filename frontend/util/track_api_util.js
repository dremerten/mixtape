export const fetchTracks = (id = null) => {
  let query = `?playlistId=${id}`;
  return $.ajax({
    method: 'GET',
    url: `api/tracks` + query,
  });
};

export const fetchTrack = id => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`
  })
);

export const saveTrack = id => (
  $.ajax({
    method: 'POST',
    url: `api/tracks/${id}/save`,
  })
);

export const saveTrackToPlaylist = (trackId, playlistId) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistId}/tracks`,
    data: {
      trackId
    }
  })
)

export const removeTrack = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}/save`,
  })
);
