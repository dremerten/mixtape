

Album.destroy_all
Artist.destroy_all
Track.destroy_all
Playlist.destroy_all
PlaylistTrack.destroy_all
Genre.destroy_all
GenreTagging.destroy_all

class S3Helper

  S3_CLIENT = Aws::S3::Client.new(
    region: ENV["s3_region"],
    access_key_id: ENV['s3_access_key_id'],
    secret_access_key: ENV['s3_secret_access_key']
  )

  def initialize
    find_music_paths
  end

  def find_music_paths
    @bucket_paths = S3_CLIENT.list_objects(bucket: 'spinnmusicfiles')
             .contents.map(&:key)
             .select { |key| /^music\//.match(key) }
  end

  def find_artists
    artist_paths = @bucket_paths.select { |path| path.split('/').length == 2 }
    @artists = artist_paths.map { |path| Artist.create!(name: path.split('/')[1]) }
  end

  def construct_artist_objects
    @artists.each { |artist| add_image_and_albums(artist) }
  end

  def add_image_and_albums(artist)
    files = @bucket_paths.select { |p| p.include?(artist.name) && p.split('/').length == 3 }
    albums, image = files.partition { |f| is_album_path?(f) }
    image_file = open(make_url(image[0]))
    artist.image = File.open(image_file)
    artist.save!

    album_objects = albums.map { |a| Album.create!(title: a.split('/').last, artist_id: artist.id) }
    album_objects.each { |obj| find_album_files(obj) }
  end

  def find_album_files(album)
    files = @bucket_paths.select { |p| p.include?(album.title) && p.split('/').length == 4 }
    image, tracks = files.partition { |p| /\.jpg$|\.jpeg$|\.png/.match(p) }
    artwork = open(make_url(image[0]))
    album.artwork = File.open(artwork)
    album.save!

    tracks.each { |t| create_track(album, t) }
  end

  def create_track(album, track)
    t = Track.create!(
      title: titleize(track),
      artist_id: album.artist_id,
      album_id: album.id,
      ord: extract_ord(track)
    )
    audio = open(make_url(track))
    t.audio = File.open(audio)
    t.save!
  end

  def titleize(track)
    track.split('/').last.split('.')[0...-1].join.split(' ').drop(1).join(' ')
  end

  def extract_ord(path)
    path.split('/').last.split(' ').first.to_i
  end

  def is_album_path?(path)
    path.split('/').length == 3 && !/.jpg|.jpeg|.png/.match(path)
  end

  def make_url(path)
    path = path.split(' ').join('%20')
    "http://s3.us-east-2.amazonaws.com/spinnmusicfiles/#{path}"
  end

  def run!
    find_artists
    construct_artist_objects
  end
end

S3Helper.new.run!

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
