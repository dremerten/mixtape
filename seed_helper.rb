class SeedHelper
  def initialize
  end

  def build_track(title, artist, album, year = nil, ord = nil)
    Track.create!(title: title, artist_id: artist.id, album_id: album.id, year: year, ord: ord)
  rescue
    "Track not created. All Attributes must be present"
  end

  def titleize_track(path)
    path.to_s.split('/').last.split('.')[0...-1].join.split(' ').drop(1).join(' ')
  end

  def titleize(path)
    path = path.to_s.split('/').last.split('_').join(' ')

    if path[0] == "*"
      path = path[1..-1]
    else
      path = path.split('_').map(&:capitalize).join(' ')
    end

    path
  end

  def is_image?(path)
    /jpg|jpeg|png|gif|tiff|svg/.match(path.to_s)
  end

  def is_audio?(path)
    /.mp3$|.m4a$|.wav$|.wma$|.aiff$/.match(path.to_s) ? true : false
  end

  def find_class_associations(class)
    Artist.new.attributes.keys.select { |a| /.+_id$/.match(a) }
                        .map { |a| a.split('_')[0...-1].map(&:capitalize).join }
                        .map { |c| to_class(c) ? to_class(c) : c }
  end

  def to_class(string)
    Kernel.const_get(string)
  rescue
    false
  end

  def seed(path)

  rescue

  end
end
