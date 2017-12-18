# require 'taglib'

class Track < ApplicationRecord
  include Helpers::Metadata

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
    bucket_name = (ENV["RAILS_ENV"] == "development" ? "spinnmusicfiles" : "spinnmusicfiles-pro")

    puts "Extracting audio from #{bucket_name}..."

    self.duration ||= Rails.configuration.s3_resource
      .bucket(bucket_name)
      .object("#{audio.path[1..-1]}")
      .metadata["duration"]

    puts "Bucket: #{bu}"
  end

  private

  # def read_audio
  #   puts "Fetching audio information..."
  #
  #   if audio.content_type.match(/mpeg/)
  #     open_mpeg
  #   else
  #     file_extension = audio.content_type.split('/').last
  #     file_name = "temp.#{file_extension}"
  #
  #     open(file_name, 'wb') do |file|
  #       file << open("http:#{audio.url}").read
  #     end
  #
  #     TagLib::FileRef.open(file_name) do |f|
  #       duration = f.audio_properties.length
  #       minutes = (duration / 60).to_s
  #       seconds = (duration % 60 < 10 ? "0#{duration % 60}" : "#{duration % 60}")
  #       self.duration = minutes + ":" + seconds
  #     end
  #
  #     File.delete(file_name)
  #   end
  #
  # rescue => e
  #   puts "The following exception was raised: #{e}"
  # end
  #
  # def open_mpeg
  #   file_name = "temp.mpeg"
  #
  #   open(file_name, 'wb') do |file|
  #     file << open("http:#{audio.url}").read
  #   end
  #
  #   TagLib::MPEG::File.open(file_name) do |f|
  #     duration = f.audio_properties.length
  #     minutes = (duration / 60).to_s
  #     seconds = (duration % 60 < 10 ? "0#{duration % 60}" : "#{duration % 60}")
  #     self.duration = minutes + ":" + seconds
  #   end
  #
  #   File.delete(file_name)
  # end
end
