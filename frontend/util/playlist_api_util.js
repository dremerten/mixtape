export const fetchPlaylists = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/playlists',
    data
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const createPlaylist = data => (
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data
  })
);

export const updatePlaylist = data => (
  $.ajax({
    method: 'PATCH',
    url: 'api/playlists',
    data
  })
);

export const destroyPlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${id}`
  })
);
