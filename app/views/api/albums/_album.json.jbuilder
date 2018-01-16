json.album do
  json.extract! album, :id, :title
  json.imageUrl asset_path(album.artwork(:small))
  json.author album.artist.name
  json.background album.background
  json.trackIds album.track_ids
  json.authorId album.artist.id
end

json.tracks do
  album.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
