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

![Playlist Image](https://github.com/dwebster17/Spinn/blob/master/docs/Playlist.png)

The playlist image is updated in two scenarios:

+ When the first song is added to a playlist, the playlist inherits _just_ that album's artwork

+ Once a playlist has songs from **4 unique albums**, the playlist gets an image that is a collage of 4 albums.

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
    return if image.url.include?('compiled-image') || tracks.empty? 

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

## Handling Search

One challenge that I faced was handling search rendering. The search page was a single-page app itself, and one issue was that the top search result could be one of several different components: playlist, album, artist, user, or track.

![Search](https://github.com/dwebster17/Spinn/blob/master/docs/Search.gif)

My solution to this was to send back the `topResultType` with the API response, and keep it in my redux store. In the search container, I created a POJO that mapped this type to its corresponding component, and passed it down in props. If there was no top result, I would return `null`.

```js
const resultComponents = {
  Artist,
  Album,
  Track,
  User,
  Playlist,
};

const mapStateToProps = ({ search: { top } }) => ({
  component: resultComponents[top.type],
  data: top
});

const TopResult = function({ component: Component, data }) {
  if (!Component) return null;

  return (
    <Component
      item={data}
      />
  );
};

export default connect(
  mapStateToProps
)(TopResult);
```

## Reusable Components

In designing the project, it became apparent that many different components were very similar. Index item components for artists, albums, genres, playlists, and users all followed a very similar design pattern, with only minor differences.

![Artist](https://github.com/dwebster17/Spinn/blob/master/docs/ArtistComponent.png)
>Artist

![Playlist](https://github.com/dwebster17/Spinn/blob/master/docs/PlaylistComponent.png)
>Playlist

![Genre](https://github.com/dwebster17/Spinn/blob/master/docs/Genre.png)
>Genre

In order to keep my code as DRY as possible, I created one modular presentational component, `GenericIndexItem`, that could be reused. By doing this, the process of adding a new component to the website became a lot faster and more manageable.

```js
class GenericIndexItem extends React.Component {
  // ...
  handleClick(e) {
    e.preventDefault();

    this.props.handleClick();
  }

  render() {
    const {
      id,
      itemName,
      author,
      imageUrl,
      loadingClass,
      imageClass,
      PlayButton
     } = this.props;

    return(
      <li key={id} className="playlist-item">
        <div className='playlist-image-container'>
          <LoadingImage
            loadingClass={loadingClass}
            imageClass={imageClass}
            imageSource={imageUrl}
            handleClick={this.handleClick}
            />
          <PlayButton id={id}/>
        </div>
        <div className="playlist-name">
          {itemName}
        </div>
        <div className='author artist'>
          {author}
        </div>
      </li>
    );
  }
}
```

Anything that changed between these components was passed down as props in a container, including the hover component that was different for each resource. Here is an example of a container for Albums.

```js
const mapStateToProps = (state, ownProps) => ({
  itemName: ownProps.item.title,
  author: ownProps.item.author,
  loading: state.ui.loading.albums,
  imageUrl: ownProps.item.imageUrl,
  id: ownProps.item.id,
  loadingClass: 'playlist-loading',
  imageClass: 'playlist-image',
  handleClick: () => ownProps.history.push(`/browse/albums/${ownProps.item.id}`),
  PlayButton
});

export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
```

A similar DRY approach was taken for implementing the various nav bars, which could appear in four different places:

![CollectionNav](https://github.com/dwebster17/Spinn/blob/master/docs/CollectionNav.png)
![Browse](https://github.com/dwebster17/Spinn/blob/master/docs/BrowseNav.png)
![SearchNav](https://github.com/dwebster17/Spinn/blob/master/docs/SearchNav.png)
![ArtistNav](https://github.com/dwebster17/Spinn/blob/master/docs/ArtistNav.png)

Every container for these components contained a POJO that mapped link names to link paths, allowing me to create add as many links as I needed with ease.

```js
// BrowseNavContainer.js
const pathNames = {
  "FEATURED": "/browse/featured",
  "GENRES & MOODS": "/browse/genres",
  "NEW RELEASES": "/browse/newreleases"
};

const mapStateToProps = ({ ui: { scroll } }) => ({
  isVisible: scroll < SCROLL_BREAKPOINT,
  className: 'browse-nav-container'
  pathNames,
});

export default connect(
  mapStateToProps
)(GenericNavBar);
```

```js
// GenericNavBar.jsx
export default function({
  isVisible,
  pathNames,
  className }) {

  return (
    <nav className={className} style={ isVisible ? { display: "" } : { display: 'none' }}>
      <div className="browse-nav">
        {
          Object.keys(pathNames).map((name, index) => (
            <NavLink to={pathNames[name]}
              className='nav-link-item'
              activeClassName='nav-link-item nav-selected'
              key={index}
              >
              <span>{name}</span>
            </NavLink>
          ))
        }
      </div>
      <Route path='/collection' component={NewPlaylistButton}/>
    </nav>
  );
}
```
