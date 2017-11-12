@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title
    json.imageUrl asset_path(album.artwork.url)
    json.artist album.artist.name
  end
end
