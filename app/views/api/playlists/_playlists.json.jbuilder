playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :name, :author_id
    json.imageUrl asset_path(playlist.image.url)
    json.author playlist.author.email
    json.background playlist.background
    json.trackIds playlist.track_ids
  end
end
