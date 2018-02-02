@albums.each do |album|
  json.set! album.id do
    json.partial! 'api/albums/album', album: album
    # json.extract! album, :id, :title
    # json.imageUrl asset_path(album.artwork(:small))
    # json.trackIds album.track_ids
    # json.author album.artist.name
    # json.background album.background
  end
end
