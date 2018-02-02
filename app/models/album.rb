class Album < ApplicationRecord
  include Followable
  include Helpers::ImageScanner

  validates :title, presence: true, length: { maximum: 40 }
  has_attached_file :artwork,
    styles: { large: '1000x1000#', small: '300x300#' },
    default_url: 'album_default.jpg'
  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\Z/

  belongs_to :artist
  has_many :tracks
  has_many :genres, through: :artist, source: :genres
  # has_many :follows, as: :followable, dependent: :destroy

  def self.new_releases
    Album.all.limit(12).order('created_at')
  end

  def self.search(query)
    joins(:artist)
      .where('lower(title) ~* :query or
              lower(artists.name) ~* :query',
              query: query)
      .limit(20)
  end

  def match_weight(query)
    title.downcase.scan(Regexp.new(query)).map(&:length).inject(:+)
  end

  def popularity
    tracks.pluck(:popularity).reduce(:+) / tracks.count
  end
end
