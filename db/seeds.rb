# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

genres = [ "Hip-Hop", "R&B", "Rock", "Indie", "Soul", "Pop", "Country", "Jazz", "Classical", "Acoustic", "Sountrack" ]

Genre.destroy_all

genres.each { |genre| Genre.create!(name: genre) }

# -------------------------------------------------------

Artist.destroy_all

a = Artist.new(name: "Frank Ocean", genre_id: Genre.find_by(name: "Hip-Hop").id)
a.image = File.open("/Users/davidwebster/AppAcademyProjects/Spinn/app/assets/images/FrankOcean.jpg")
a.save!


# -------------------------------------------------------
Album.destroy_all

# Pathname.new("#{Rails.root}/app/assets/images/Album Covers").children.each do |t|
#   title = t.to_s.split('/').last.split('.').first
#
#   if title[0] == "*"
#     title = title[1..-1]
#   else
#     title = title.split('_')..map(&:capitalize).join(' ')
#   end
#
#   album = Album.new(title: title, artist_id)
#   album_id = 1
#   artist_id = 1
#   year = 2007
#   track = Track.new(title: title, album_id: album_id, artist_id: artist_id, year: year)
#   track.audio = File.open(t.to_s)
#   track.save!
# end
album = Album.new(title: "nostalgia, ULTRA", artist_id: Artist.find_by(name: "Frank Ocean").id, year: 2007)
album.artwork = File.open("#{Rails.root}/app/assets/images/Album Covers/*nostalgia, ULTRA.jpg")
album.save!

Track.destroy_all

Pathname.new("#{Rails.root}/app/assets/Albums/Nostalgia_Ultra").children.each do |t|
  title = t.to_s.split('/').last.split('.').first.split(' ').drop(1).join(' ')
  album_id = Album.find_by(title: "nostalgia, ULTRA").id
  artist_id = Artist.find_by(name: "Frank Ocean").id
  year = 2007
  track = Track.new(title: title, album_id: album_id, artist_id: artist_id, year: year)
  track.audio = File.open(t.to_s)
  track.save!
end
