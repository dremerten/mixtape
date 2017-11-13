require 'taglib'

class Track < ApplicationRecord
  validates :title, presence: true, length: { maximum: 100 }

  has_attached_file :audio, validate_media_type: false
  do_not_validate_attachment_file_type :audio

  belongs_to :album
  has_one :artist, through: :album, source: :artist
  has_many :genres, through: :album, source: :genres
  has_many :playlist_tracks
  has_many :playlists, through: :playlist_tracks, source: :playlist

  # after_save :extract_audio_duration

  # attr_reader :length

  # def extract_audio_duration
  #   if self.audio_file_name
  #     TagLib::FileRef.open(open(self.audio.url)) do |fileref|
  #       
  #       self.length = fileref.audio_properties.length
  #     end
  #   end
  # end

end
