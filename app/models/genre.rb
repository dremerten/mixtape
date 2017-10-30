class Genre < ApplicationRecord
  validates :name, presence: true

  has_many :genre_taggings
  has_many :artists, through: :genre_taggings, source: :artist
  has_many :albums, through: :artists, source: :albums
  has_many :tracks, through: :albums, source: :tracks
end
