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
