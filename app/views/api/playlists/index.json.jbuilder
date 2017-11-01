@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :name, :author_id
    json.image_url asset_path(playlist.image.url)
  end
end
