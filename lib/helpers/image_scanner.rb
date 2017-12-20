require 'rmagick'

module Helpers::ImageScanner
  include Magick

  def generate_gradient
    # skip all picture that are similar to the color white
    max_pixel = Pixel.from_color('#A3A3A3')

    image = ImageList.new("http:#{artwork(:small)}").first

    # Instantiate a rgb value, which will be averaged
    rgb_total = [0, 0, 0]

    # Iterate over each pixel and find it's rgb value. Add it to the
    # rgb_total, but first divide by 257 due to the depth differential

    # keep track of number of pixels for averaging later
    count = 0
    image.each_pixel do |pix|
      next if pix >= max_pixel

      count += 1
      [:red, :green, :blue].each_with_index do |color, i|
        rgb_total[i] += pix.send(color) / 257
      end
    end

    # find the average value for all color attributes
    rgb_av = rgb_total.map { |val| val / count }

    # there will be two rgb values passed up to create a gradient
    first_grad = rgb_av.join(',')

    # second gradient value will be 10% of the first
    second_grad = rgb_av.map { |val| val / 10 }
                        .join(',')

    # return string with formatted CSS background syntax

    self.background = "linear-gradient(rgb(#{first_grad}), rgb(#{second_grad}) 85%) fixed"

    save
  end
end
