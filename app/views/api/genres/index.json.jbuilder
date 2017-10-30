json.array! @genres do |genre|
  json.partial! 'api/genres/genre', genre: genre
end
