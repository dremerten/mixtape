json.extract! album, :id, :title, :artist_id
json.artwork_url asset_path(album.artwork.url)
json.trackIds album.tracks.map(&:id)
