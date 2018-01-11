@artists.each do |artists|
  json.set! artist.id do
    render 'api/artists/artist', artist: artist
  end
end
