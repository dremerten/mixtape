require 'rmagick'

module Helpers::ImageScanner
  include Magick

  def generate_gradient
    # Skip all picture that are similar to the color white
    max_pixel = Pixel.from_color('white')

    image = ImageList.new("http:#{artwork(:small)}").first

    # Instantiate a rgb value, which will be averaged
    rgb_total = [0, 0, 0]

    # Iterate over each pixel and find it's rgb value. Add it to the
    # rgb_total, but first divide by 257 due to the depth differential

    # Keep track of number of pixels for averaging later
    count = 0
    image.each_pixel do |pix|
      # Skip white pixels
      next if pix >= max_pixel

      count += 1
      [:red, :green, :blue].each_with_index do |color, i|
        rgb_total[i] += pix.send(color) / 257
      end
    end

    # Find the average value for all color attributes
    rgb_av = rgb_total.map { |val| val / count }

    # If the color is too bright, scale the color to make it darker
    rgb_av = _scale_color(rgb_av) if _should_scale_color?(rgb_av)
    # There will be two rgb values passed up to create a gradient
    first_grad = rgb_av.join(',')

    # Second gradient value will be 10% of the first
    second_grad = rgb_av.map { |val| val / 10 }
                        .join(',')

    # Return string with formatted CSS background syntax
    self.background = "linear-gradient(rgb(#{first_grad}), rgb(#{second_grad}) 85%) fixed"
    save
  end

  def combine
    raise "You cannot call combine on a #{self.class}" unless self.is_a? Playlist

    albums = Album.joins(:tracks)
                  .where('tracks.id': self.track_ids)
                  .distinct
                  .limit(4)

    artwork_urls = albums.map { |a| a.artwork(:small) }

    compiled_image = ImageList.new
    first_row = ImageList.new
    second_row = ImageList.new

    artwork_urls[0..1].each do |url|
      first_row.push(Image.read("http:#{url}").first)
    end

    compiled_image.push(first_row.append(false))

    artwork_urls[2..3].each do |url|
      second_row.push(Image.read("http:#{url}").first)
    end

    compiled_image.push(second_row.append(false))

    image_path = "app/assets/images/#{self.name}-compiled-image.jpg"
    compiled_image.append(true).write(image_path)

    self.image = File.open(image_path)

    File.delete(image_path)
  end

  private

  def _should_scale_color?(rgb)
    rgb.all? { |val| val > 150 }
  end

  def _scale_color(rgb)
    amount_to_scale = rgb.max - 140

    rgb.map { |val| val - amount_to_scale }
  end
end
