class Playlist < ApplicationRecord
  include Followable
  include Helpers::ImageScanner

  validates_inclusion_of :featured, in: [true, false]
  belongs_to :author, optional: true, foreign_key: :author_id, class_name: 'User'
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks, source: :track
  has_many :genres, through: :tracks, source: :genres

  has_attached_file :image,
    styles: { large: '1000x1000#', small: '300x300#' },
    default_url: 'album_default.jpg'

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  before_save :inherit_artwork

  scope :featured, -> { where(featured: true) }
  scope :site_generated, -> { includes(:author).where(author_id: 0) }

  def self.for(user)
    Playlist.includes(:author, :tracks).where(author_id: user.id).order(id: 'desc').limit(40)
  end

  def self.set_featured_playlists
    reset_featured_to_false

    Playlist.where(author_id: 0).sample(12).each { |p| p.update featured: true }
  end

  def self.reset_featured_to_false
    Playlist.all.each { |p| p.update featured: false }
  end

  def add_track(track_id)
    update(track_ids: track_ids + [track_id])
  end

  def remove_track(track_id)
    update(track_ids: track_ids - [track_id.to_i])
  end

  # Make playlist take the artwork of the first track that was added
  def inherit_artwork
    # Only update artwork if it hasn't been updated yet
    return if image.url.include?('compiled-image') ||
              tracks.empty? ||
              author_id.zero?

    num_albums = tracks.pluck(:album_id).uniq.count

    if num_albums < 4
      return unless image.url.include?('default')

      self.image = open("http:#{tracks.first.album.artwork(:small)}")
    else
      # This calls the combine method inherited from the ImageScanner module
      combine
    end
  end
end
