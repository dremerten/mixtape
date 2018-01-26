# json.partial! 'api/artists/artist', artist: @artist
json.artist do
  json.extract! @artist, :id, :name
  json.imageUrl asset_path(@artist.image(:thumb))
  json.hero asset_path(@artist.image.url)
  json.albumIds @artist.album_ids
  json.topTrackIds @artist.tracks.order(popularity: :desc).pluck(:id)
  json.followCount @artist.followers.count
  json.about @artist.about
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :year
      json.imageUrl album.artwork(:large)
      json.trackIds album.track_ids
    end
  end
end

json.tracks do
  @artist.tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :duration
      json.trackUrl track.audio.url
      json.imageUrl track.album.artwork(:small)
      json.artist @artist.name
    end
  end
end
