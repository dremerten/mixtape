class Playlist < ApplicationRecord
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks, source: :track
  has_many :genres, through: :tracks, source: :genres

  has_attached_file :image, default_url: 'album_default.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.featured
    Playlist.all.limit(5).order('random()')
  end

  def uniq_genres
    genres.uniq
  end
end
