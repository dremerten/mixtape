<img src="https://github.com/dwebster17/Spinn/blob/master/app/assets/images/Logo-black.png" alt="Spinn Logo" width= "75" height="75px"/>

# Spinn

>[Live Demo](https://www.google.com "Google's Homepage")

Spinn is a music streaming website inspired by Spotify. It makes use of Rails/PostgreSQL on the backend, and React.js/Redux on the client. This project also leverages Amazon AWS file-hosting for all music and media data.

Spinn was initially planned, designed, and built in the span of 10 days. Over time, I've had the opportunity to add addtional advanced features and functionality.

---
## Features
### Core
+ Custom frontend to backend user authentication using BCrypt.
+ Users can explore site-generated content by albums, artists, genres, or playlists
+ Songs can be saved or removed from a collection at any time
+ Users can create, edit, delete, and share playlists
+ Fully customized media bar with play, pause, seek, shuffle, repeat, and volume control
+ Users can follow playlists, artists, and other users.
+ User pages show which playlists they've created, and which other users they are following/are followed by
+ Search for users, playlists, songs, albums, and artists all in one query

### Advanced
+ Playlist images are dynamically generated on the backend based on the contents of the playlist.
+ Background color for album and playlist pages update based on the most common color found in playlist's artwork
+ Search returns a "Top Result" based on the match significance found in the application's backend
+ Smooth image loading, with placeholder image, created with a customized React component that doesn't render until the image data is fully fetched.

---

## Dynamic Image Processing

A feature that I was especially excited about implementing was the dynamic image creation that Spotify uses. With this feature, a playlist image continuously represents the contents of that playlist.

![Playlist Image](https://github.com/dwebster17/Spinn/blob/master/docs/PlayerGif.gif)

The playlist image was updated in two scenarios:

+ When the first song is added to a playlist, the playlist inherits _just_ that album's artwork

+ Once a playlist has songs from **4 unique albums**, the module creates a new collage of the four images.

I did this by a) creating an `ImageScanner` module that handles the logic of generating an image collage, and b) write a `Playlist#inherit_artwork` method that was invoked in a `before_save` model callback.

```ruby
# playlist.rb
class Playlist < ApplicationRecord
  include Helpers::ImageScanner

  # ...

  before_save :inherit_artwork

  # ...

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
```

```ruby
# helpers/image_scanner.rb
module Helpers::ImageScanner
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
end
```
