export const fetchAlbums = data => (
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    data
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);
