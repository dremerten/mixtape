class Track < ApplicationRecord
  validates :title, presence: true, length: { maximum: 40 }

  has_attached_file :audio, validate_media_type: false
  do_not_validate_attachment_file_type :audio

  belongs_to :album
  has_one :artist,
    through: :album,
    source: :artist

  has_one :genre,
    through: :artist,
    source: :genre
end
