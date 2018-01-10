class Artist < ApplicationRecord
  include Followable
  validates :name, presence: true, length: { maximum: 100 }

  has_attached_file :image, default_url: 'avatar.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :albums
  has_many :tracks, through: :albums, source: :tracks
  has_many :genre_taggings
  has_many :genres, through: :genre_taggings, source: :genre
  # has_many :follows, as: :followable, dependent: :destroy

  def popularity
    tracks.map(&:popularity).reduce(:+) / tracks.count
  end
end
