require 'faker'


User.destroy_all

spinn = User.create!(
  name: 'Spinn',
  email: 'Spinn',
  password: 'x9z8a7q6',
  password_confirmation: 'x9z8a7q6',
  birthday: '000000'
)

sennacy = User.create!(
  name: 'Sennacy',
  email: 'Sennacy17',
  password: 'starwars',
  password_confirmation: 'starwars',
  birthday: '123456'
)

spinn.id = 0;
spinn.save!

Album.destroy_all
Artist.destroy_all
Track.destroy_all
Playlist.destroy_all
PlaylistTrack.destroy_all
Genre.destroy_all
GenreTagging.destroy_all

class S3Helper
  #
  S3_CLIENT = Aws::S3::Client.new(region: ENV["s3_region"], access_key_id: ENV['s3_access_key_id'],secret_access_key: ENV['s3_secret_access_key'])

  def initialize
    find_music_paths
  end

  def run!
    find_artists
    construct_artist_associations
  end

  def find_music_paths
    @bucket_paths = Rails.configuration.s3_client.list_objects(bucket: 'spinnmusicfiles')
                             .contents.map(&:key)
                             .select { |key| /^music\//.match(key) }
  end

  def find_artists
    artist_paths = @bucket_paths.select { |path| path.split('/').length >= 2 }
    artist_paths.map! { |path| path.split('/')[1] }
    artist_paths.uniq!
    @artists = artist_paths.map { |path| Artist.create!(name: path) }
  end

  def construct_artist_associations
    @artists.each { |artist| add_image_and_albums(artist) }
  end

  def add_image_and_albums(artist)
    files = @bucket_paths.select { |p| p.include?(artist.name) && p.split('/').length >= 3 }
    files.reject! { |e| /.DS_Store/.match(e) }
    albums, images = files.partition { |f| is_album_path?(f) }
    albums.map! { |album| album.split('/')[2] }
    albums.uniq!
    images.select! { |image| image.split('/').length == 3 && /\.jpg$|\.jpeg$|\.png/.match(image) }
    artist.image = open(make_url(images[0]))
    artist.save!
    albums.reject! { |el| /.DS_Store/.match(el) }

    album_objects = albums.map { |a| Album.create!(title: a, artist_id: artist.id) }
    album_objects.each { |obj| find_album_files(obj) }
  end

  def find_album_files(album)
    files = @bucket_paths.select { |p| p.include?(album.title) && p.split('/').length >= 4 }
    image, tracks = files.partition { |p| /\.jpg$|\.jpeg$|\.png/.match(p) }
    album.artwork = open(make_url(image[0]))

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
    path.split('/').length >= 3 && !/.jpg|.jpeg|.png/.match(path) && !/.m4a|.mp3/.match(path)
  end

  def make_url(path)
    path = path.split(' ').join('%20')
    "http://s3.us-east-2.amazonaws.com/spinnmusicfiles/#{path}"
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
adele = Artist.find_by(name: "Adele")
james_blake = Artist.find_by(name: "James Blake")
lorde = Artist.find_by(name: "Lorde")
taylor = Artist.find_by(name: "Taylor Swift")
drake = Artist.find_by(name: "Drake")
typhoon = Artist.find_by(name: 'Typhoon')
daft = Artist.find_by(name: "Daft Punk")


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

30.times do
  begin
    SavedTrack.create!(user_id: sennacy.id, track_id: Track.all.sample.id)
  rescue
    retry
  end
end

genres.each { |genre| Genre.create!(name: genre) }

hip_hop = Genre.find_by(name: "Hip-Hop")
jazz = Genre.find_by(name: "Jazz")
r_b = Genre.find_by(name: "R&B")
soul = Genre.find_by(name: "Soul")
pop = Genre.find_by(name: "Pop")
acoustic = Genre.find_by(name: "Acoustic")
chill = Genre.find_by(name: "Chill")
indie = Genre.find_by(name: 'Indie')
rock = Genre.find_by(name: 'Rock')

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
GenreTagging.create!(artist_id: adele.id, genre_id: pop.id)
GenreTagging.create!(artist_id: adele.id, genre_id: soul.id)
GenreTagging.create!(artist_id: taylor.id, genre_id: pop.id)
GenreTagging.create!(artist_id: lorde.id, genre_id: pop.id)
GenreTagging.create!(artist_id: drake.id, genre_id: hip_hop.id)
GenreTagging.create!(artist_id: james_blake.id, genre_id: indie.id)
GenreTagging.create!(artist_id: typhoon.id, genre_id: indie.id)
GenreTagging.create!(artist_id: daft.id, genre_id: rock.id)

playlist1 = Playlist.create!(name: 'Hip-Hop Essentials', author_id: 0)
playlist1.image = File.open('app/assets/images/rap.jpg')
playlist1.save!
sleep(2)
playlist2 = Playlist.create!(name: 'Monday Jazz', author_id: 0)
playlist2.image = File.open('app/assets/images/jazz.jpeg')
playlist2.save!
sleep(2)
playlist3 = Playlist.create!(name: 'This is Soul', author_id: 0)
playlist3.image = File.open('app/assets/images/soul.jpg')
playlist3.save!
sleep(2)
playlist4 = Playlist.create!(name: 'Turn Up', author_id: 0)
playlist4.image = File.open('app/assets/images/party.jpeg')
playlist4.save!
sleep(2)
playlist5 = Playlist.create!(name: 'Pop Hits', author_id: 0)
playlist5.image = File.open('app/assets/images/pop.jpeg')
playlist5.save!
sleep(2)
playlist6 = Playlist.create!(name: 'Chill Out', author_id: 0)
playlist6.image = File.open('app/assets/images/chill.jpg')
playlist6.save!

['Weekend Jams',
  'Weekday Blues',
  'Beach Music',
  'Work Hard',
  'Pump Up',
  'Wedding',
  'Calm Night',
  'Electro Groove',
  'Foreign Hits',
  'Mellow Vibes',
  'Travel'
].each.with_index(1) do |name, i|
  p = Playlist.new(name: name, author_id: 0)
  p.image = File.open("app/assets/images/playlist-#{i}.jpg")
  p.save!
  20.times do
    begin
      PlaylistTrack.create!(playlist_id: p.id, track_id: Track.all.sample.id)
    rescue
      nil
    end
  end
end

100.times do
  p = Playlist.create!(name: Faker::Book.title, author_id: sennacy.id )
  i = rand(1..11)
  p.image = File.open("app/assets/images/playlist-#{i}.jpg")
  p.save!
  20.times do
    begin
      PlaylistTrack.create!(playlist_id: p.id, track_id: Track.all.sample.id)
    rescue
      nil
    end
  end
end


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
