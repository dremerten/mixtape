json.extract! playlist, :id, :name, :author_id
json.trackIds playlist.tracks.map(&:id)
json.image_url asset_path(playlist.image.url)
