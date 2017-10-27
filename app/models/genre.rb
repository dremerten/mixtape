class Genre < ApplicationRecord
  validates :name, presence: true

  has_many :artists
  has_many :albums, through: :artists, source: :albums
  has_many :tracks, through: :albums, source: :tracks

end
