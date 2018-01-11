json.extract! track, :id, :title, :ord, :duration
# json.playlistIds track.playlists.map(&:id)
json.trackUrl asset_path(track.audio.url)
json.imageUrl asset_path(track.album.artwork.url)
json.album track.album.title
json.albumId track.album.id
# json.contentType track.audio_content_type.split('/').last
json.artist track.artist.name
json.artistId track.artist.id
