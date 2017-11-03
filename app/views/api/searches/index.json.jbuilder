json.tracks do
  @tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title
      json.artistName track.artist.name
      json.albumName track.album.title
      json.imageUrl track.album.artwork.url
    end
  end
end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
    end
  end
end

json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title
      json.artistName album.artist.name
      json.artworkUrl = album.artwork.url
    end
  end
end

json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :name
      json.imageUrl playlist.image.url
    end
  end
end

json.topResults do
  json.array! @most_popular_tracks
end
