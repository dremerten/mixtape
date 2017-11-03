import React from 'react';
import Track from '../tracks/track';

class Album extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      paused: this.props.inProgress
    }
  }

  componentDidMount() {
    let albumId = this.props.match.params.albumId;
    if (albumId) {
      this.props.fetchAlbum(albumId)
    }
  }

  componentWillUnmount() {
    this.props.removeTracks();
  }

  componentWillReceiveProps(newProps) {
    let id = this.props.match.params.albumId;
    let newId = newProps.match.params.albumId;

    if ( newId !== id) {
      this.props.fetchAlbum(newId)
    }
  }

  render() {
    let tracks, title, artist;
    let imageUrl = { backgroundImage: "image_url('album_default.jpg')" }

    if (this.props.album) {
      tracks = this.props.tracks.map(track => (
        <Track props={this.props} track={track} key={track.id}/>
        )
      );

      title = this.props.album.title
      artist = this.props.album.artist

      if (!tracks.length) {
        tracks = [<span className="track-row-wrapper no-hover">
          Oops! An error seems to have occured.
        </span>]
      }
      imageUrl = { backgroundImage: 'url(' + this.props.album.artwork_url + ')' }
    }

    return(
      <div className="playlist-show-wrapper">
        <div className="playlist-show-container">
          <div className="playlist-info">
            <div
              className='playlist-image show'
              style={imageUrl}>
              <div className="shadow-light show-light"></div>
            </div>
            <div className='headers'>
              <div className='playlist-title'>
                {title}
              </div>
              <div className='author'>
                by <span>{artist}</span>
              </div>
            </div>
          </div>
          <ol className='tracklist-container'>
            {tracks}
          </ol>
        </div>
      </div>
    )
  }

}

export default Album;
