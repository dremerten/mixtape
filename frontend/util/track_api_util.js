export const fetchTracks = data => (
  $.ajax({
    method: 'GET',
    url: 'api/tracks',
    data
  })
);

export const fetchTrack = id => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`
  })
);
