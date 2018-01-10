json.extract! user, :id, :name, :email, :created_at
json.avatar_url asset_path(user.avatar.url)
json.trackIds track_ids
json.playlistIds user.playlist_ids.sort.reverse
json.followIds do
  json.artists user.followable_ids_for('Artist')
  json.albums user.followable_ids_for('Album')
  json.playlists user.followable_ids_for('Playlist')
  json.users user.followable_ids_for('User')
end
