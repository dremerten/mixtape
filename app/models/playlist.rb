class Playlist < ApplicationRecord
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks, source: :track
  has_many :genres, through: :tracks, source: :genres
  belongs_to :author, foreign_key: :author_id, class_name: 'User'

  has_attached_file :image, default_url: 'album_default.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.featured
    Playlist.where(author_id: 0).limit(12).order('random()')
  end

  def self.user_playlists(user)
    Playlist.where(author_id: user.id).order(id: 'desc').limit(40)
    # Playlist.all.concat(Playlist.all).concat(Playlist.all)
  end
end
