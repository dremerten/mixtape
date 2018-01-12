@followed_items.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name
    json.imageUrl artist.image(:thumb)
  end
end
