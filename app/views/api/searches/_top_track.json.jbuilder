json.extract! track, :title
json.id track.album_id
json.imageUrl asset_path(track.album.artwork(:small))
json.trackIds track.album.track_ids
json.author track.artist.name
json.background track.album.background
