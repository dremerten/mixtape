class Playlist < ApplicationRecord
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks, source: :track
  has_many :genres, through: :tracks, source: :genres
  belongs_to :author, foreign_key: :author_id, class_name: 'User'

  has_attached_file :image, default_url: 'album_default.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  before_save :inherit_artwork

  def self.featured
    Playlist.where(author_id: 0).limit(12).order('random()')
  end

  def self.user_playlists(user)
    Playlist.where(author_id: user.id).order(id: 'desc').limit(40)
  end

  def add_track(track_id)
    update(track_ids: track_ids + [track_id])
  end

  def remove_track(track_id)
    update(track_ids: track_ids - [track_id.to_i])
  end

  # Make playlist take the artwork of the first track that was added
  def inherit_artwork
    # Only update artwork if it hasn't been updated yet
    debugger
    return unless image && self.image.url.match(/album_default/) && !tracks.empty?

    self.image = open("http:#{tracks.first.album.artwork.url}")
  end
end
