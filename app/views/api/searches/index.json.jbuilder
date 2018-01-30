json.tracks do
  @tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end

json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title
      json.imageUrl asset_path(album.artwork(:small))
      json.trackIds album.track_ids
      json.author album.artist.name
      json.background album.background
    end
  end
end

json.playlists do
  json.partial! 'api/playlists/playlists', playlists: @playlists
end
