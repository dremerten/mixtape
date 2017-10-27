class Artist < ApplicationRecord
  validates :name, presence: true, length: { maximum: 40 }

  has_attached_file :image, default_url: 'avatar.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :genre
  has_many :albums
  has_many :tracks,
    through: :albums,
    source: :tracks
end
