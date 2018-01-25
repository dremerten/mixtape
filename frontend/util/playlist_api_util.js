export const fetchPlaylists = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists',
    data
  });
};

export const fetchModalPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists',
    data: { type: 'user' }
  });
};

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const createPlaylist = playlist => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: { playlist }
  });
};

export const updatePlaylist = data => (
  $.ajax({
    method: 'PATCH',
    url: 'api/playlists',
    data
  })
);

export const deletePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${id}`
  })
);
