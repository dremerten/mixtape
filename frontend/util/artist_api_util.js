export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);

export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/user/artists'
  })
);

export const fetchUserArtists = id => (
  $.ajax({
    method: 'GET',
    url: `/users/${id}/follows/artists`
  })
);
