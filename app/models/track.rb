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
  has_many :saved_tracks
  has_many :user_adds, through: :saved_tracks, source: :user
  before_validation :extract_audio_duration

  def extract_audio_duration
    return if self.duration

    file_extension = audio.content_type.split('/').last
    file_name = "temp.#{file_extension}"

    open(file_name, 'wb') do |file|
      file << open("http:#{audio.url}").read
    end

    TagLib::FileRef.open(file_name) do |f|
      duration = f.audio_properties.length
      minutes = (duration / 60).to_s
      seconds = (duration % 60 < 10 ? "0#{duration % 60}" : "#{duration % 60}")
      self.duration = minutes + ":" + seconds
    end

    File.delete(file_name)

  rescue
    self.duration = "2:38"
  end
end
