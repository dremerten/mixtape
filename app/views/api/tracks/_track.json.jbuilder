json.extract! track, :id, :title, :ord, :popularity, :artist_id, :album_id, :year
json.genreIds track.genres.map(&:id)
json.track_url asset_path(track.audio.url)
