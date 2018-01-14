json.message ['Song Successfully Added']

# json.data do
json.playlistId @playlist.id
json.trackId @track_id
json.imageUrl @playlist.image(:small)
# end
