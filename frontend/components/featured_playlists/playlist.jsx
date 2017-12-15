import React from 'react';
import Track from '../tracks/track';
// import Link from 'react-dom-router';
class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: this.props.inProgress
    };
  }

  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    if (playlistId) {
      this.props.fetchPlaylist(playlistId);
    }
  }

  componentWillUnmount() {
    this.props.removeTracks();
  }

  componentWillReceiveProps(newProps) {
    let id = this.props.match.params.playlistId;
    let newId = newProps.match.params.playlistId;

    if ( newId !== id) {
      this.props.fetchPlaylist(newId);
    }
  }

  render() {
    let tracks, title, author, count;
    let imageUrl = { backgroundImage: "image_url('album_default.jpg')" };

    if (this.props.playlist) {
      tracks = this.props.tracks.map(track => (
        <Track
          { ...this.props}
          track={track}
          collectionId={this.props.playlist.id}
          showDropdown={this.props.showDropdown}
          key={track.id} />
        )
      );

      title = this.props.playlist.name;
      author = this.props.playlist.author_name;
      count = this.props.tracks.length;
      if (!tracks.length) {
        tracks = [<span className="track-row-wrapper no-hover" key={1}>
          There aren't any tracks on this playlist yet.
        </span>];
      }
      imageUrl = { backgroundImage: 'url(' + this.props.playlist.imageUrl + ')' };
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
              <div className='sub-header'>
                by <span>{author}</span>
              </div>
              <div className='sub-header'>
                {count} SONGS
              </div>
            </div>
          </div>
          <ol className='tracklist-container'>
            {tracks}
          </ol>
        </div>
      </div>
    );
  }

}

export default Playlist;
