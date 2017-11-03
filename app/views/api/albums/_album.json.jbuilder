json.album do
  json.extract! album, :id, :title
  json.artwork_url asset_path(album.artwork.url)
  json.artist album.artist.name
end

json.tracks do
  album.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
