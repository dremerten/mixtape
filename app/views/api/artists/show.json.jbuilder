# json.partial! 'api/artists/artist', artist: @artist
json.artist do
  json.set! @artist.id do
    json.extract! @artist, :id, :name
    json.imageUrl asset_path(@artist.image.url)
    json.albumIds @artist.album_ids
    json.topTrackIds @artist.tracks.order(popularity: :desc).pluck(:id)
  end
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :year
      json.imageUrl album.artwork(:large)
    end
  end
end
