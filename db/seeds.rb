require 'byebug'




# -------------------------------------------------------

# -------------------------------------------------------
Album.destroy_all

Artist.destroy_all

Track.destroy_all

def build_track(title, artist, album, year = nil, ord = nil)
  Track.create!(title: title, artist_id: artist.id, album_id: album.id, year: year, ord: ord)
end

def titleize_track(path)
  path.to_s.split('/').last.split('.')[0...-1].join.split(' ').drop(1).join(' ')
end

def find_ord(path)
  (path.to_s.split('/').last.split(' ')[0]).to_i
end

def titleize(path)
  path = path.to_s.split('/').last.split('_').join(' ')

  if path[0] == "*"
    path = path[1..-1]
  else
    path = path.split(/[\s_]/).map(&:capitalize).join(' ')
  end

  path
end

def is_image?(path)
  /.jpg$|.jpeg$|.png$|.gif$|.tiff$|.svg$/.match(path.to_s) ? true : false
end

def is_audio?(path)
  /.mp3$|.m4a$|.wav$|.wma$|.aiff$/.match(path.to_s) ? true : false
end

Pathname.new("#{Rails.root}/app/assets/artists").children.each do |artist|
  next if artist.file?

  artist_name = titleize(artist)

  @artist = Artist.create!(name: artist_name)

  artist.children.each do |album|
    next if /DS_Store/.match(album.to_s)

    if is_image?(album)
      @artist.image = File.open(album.to_s)
      @artist.save!
    else
      @album = Album.create!(title: titleize(album), artist_id: @artist.id)

      album.children.each do |track|
        if is_image?(track)
          @album.artwork = File.open(track.to_s)
          @album.save!
        else
          track_title = titleize_track(track)
          @track = build_track(track_title, @artist, @album, nil, find_ord(track))
          @track.audio = File.open(track.to_s)
          @track.save!
        end
      end
    end
  end
end

GenreTagging.destroy_all
Genre.destroy_all
Playlist.destroy_all
PlaylistTrack.destroy_all

marcus = Artist.find_by(name: "Marcus Miller")
frank = Artist.find_by(name: "Frank Ocean")
childish = Artist.find_by(name: "Childish Gambino")
coldplay = Artist.find_by(name: "Coldplay")
justin = Artist.find_by(name: "Justin Timberlake")
kendrick = Artist.find_by(name: "Kendrick Lamar")
ed = Artist.find_by(name: "Ed Sheeran")
schoolboy = Artist.find_by(name: "Schoolboy Q")

genres = [
  "Hip-Hop",
  "R&B",
  "Rock",
  "Indie",
  "Soul",
  "Pop",
  "Country",
  "Jazz",
  "Classical",
  "Acoustic",
  "Soundtrack",
  "Chill",
  "Party",
  "Workout"
]

genres.each { |genre| Genre.create!(name: genre) }

hip_hop = Genre.find_by(name: "Hip-Hop")
jazz = Genre.find_by(name: "Jazz")
r_b = Genre.find_by(name: "R&B")
soul = Genre.find_by(name: "Soul")
pop = Genre.find_by(name: "Pop")
acoustic = Genre.find_by(name: "Acoustic")
chill = Genre.find_by(name: "Chill")

GenreTagging.create!(artist_id: frank.id, genre_id: hip_hop.id)
GenreTagging.create!(artist_id: frank.id, genre_id: soul.id)
GenreTagging.create!(artist_id: frank.id, genre_id: r_b.id)
GenreTagging.create!(artist_id: childish.id, genre_id: hip_hop.id)
GenreTagging.create!(artist_id: schoolboy.id, genre_id: hip_hop.id)
GenreTagging.create!(artist_id: marcus.id, genre_id: jazz.id)
GenreTagging.create!(artist_id: marcus.id, genre_id: soul.id)
GenreTagging.create!(artist_id: ed.id, genre_id: pop.id)
GenreTagging.create!(artist_id: ed.id, genre_id: acoustic.id)
GenreTagging.create!(artist_id: coldplay.id, genre_id: pop.id)
GenreTagging.create!(artist_id: coldplay.id, genre_id: chill.id)
GenreTagging.create!(artist_id: justin.id, genre_id: pop.id)

playlist1 = Playlist.create!(name: 'Hip-Hop Essentials')
playlist2 = Playlist.create!(name: 'Monday Jazz')
playlist3 = Playlist.create!(name: 'This is Soul')
playlist4 = Playlist.create!(name: 'Turn Up')
playlist5 = Playlist.create!(name: 'Pop Hits')
playlist6 = Playlist.create!(name: 'Chill Out')

20.times do
  begin
    PlaylistTrack.create!(playlist_id: playlist1.id, track_id: hip_hop.tracks.sample.id)
  rescue
    nil
  end
end

20.times do
  begin
    PlaylistTrack.create!(playlist_id: playlist2.id, track_id: jazz.tracks.sample.id)
  rescue
    nil
  end
end

20.times do
  begin
    PlaylistTrack.create!(playlist_id: playlist3.id, track_id: soul.tracks.sample.id)
  rescue
    nil
  end
end

20.times do
  begin
    PlaylistTrack.create!(playlist_id: playlist4.id, track_id: hip_hop.tracks.sample.id)
  rescue
    nil
  end
end

20.times do
  begin
    PlaylistTrack.create!(playlist_id: playlist5.id, track_id: pop.tracks.sample.id)
  rescue
    nil
  end
end

12.times do
  begin
    PlaylistTrack.create!(playlist_id: playlist6.id, track_id: chill.tracks.sample.id)
    PlaylistTrack.create!(playlist_id: playlist6.id, track_id: acoustic.tracks.sample.id)
  rescue
    nil
  end
end
