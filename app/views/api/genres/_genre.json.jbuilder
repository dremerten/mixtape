json.extract! genre, :id, :name
json.trackIds genre.tracks.map(&:id)
