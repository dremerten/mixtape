@artists.each do |artist|
  json.set! artist.id do
    render 'api/artists/artist', artist: artist
  end
end
