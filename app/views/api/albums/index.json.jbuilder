@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title
    json.imageUrl asset_path(album.artwork(:small))
    json.author album.artist.name
    json.background album.background
  end
end
