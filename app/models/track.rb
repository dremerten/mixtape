class Track < ApplicationRecord
  validates :title, presence: true, length: { maximum: 100 }

  has_attached_file :audio, validate_media_type: false
  do_not_validate_attachment_file_type :audio

  belongs_to :album
  has_one :artist, through: :album, source: :artist
  has_many :genres, through: :album, source: :genres
  has_many :playlist_tracks
  has_many :playlists, through: :playlist_tracks, source: :playlist
end
