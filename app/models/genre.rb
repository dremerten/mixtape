class Genre < ApplicationRecord
  validates :name, presence: true

  has_many :genre_taggings
  has_many :artists, through: :genre_taggings, source: :artist
  has_many :albums, through: :artists, source: :albums
  has_many :tracks, through: :albums, source: :tracks
  has_many :playlists, -> { distinct }, through: :tracks, source: :playlists
  has_attached_file :image,
    styles: { large: '1000x1000#', small: '300x300#' },
    default_url: 'album_loading.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
