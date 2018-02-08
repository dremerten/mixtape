json.tracks do
  @tracks.includes(:artist, :album).each do |track|
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
      json.partial! 'api/albums/album', album: album
    end
  end
end

json.playlists do
  @playlists.includes(:author, :tracks).each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :name, :author_id
      json.imageUrl asset_path(playlist.image.url)
      json.author playlist.author.email
      json.trackIds playlist.track_ids
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

json.top do
  json.type @top_result && @top_result.class.to_s

  if @top_result.is_a? Album
    json.partial! 'api/albums/album', album: @top_result
  elsif @top_result.is_a? Artist
    json.partial! 'api/artists/artist', artist: @top_result
  elsif @top_result.is_a? Track
    json.partial! 'api/searches/top_track', track: @top_result
  elsif @top_result.is_a? User
    json.partial! 'api/users/user', user: @top_result
  elsif @top_result.is_a? Playlist
    json.extract! @top_result, :id, :name, :author_id
    json.imageUrl asset_path(@top_result.image.url)
    json.author @top_result.author.email
    json.trackIds @top_result.track_ids
  end

end
