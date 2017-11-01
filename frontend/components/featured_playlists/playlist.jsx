import React from 'react';
import Track from '../tracks/track';

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    // this.playlist = props.playlist
    // this.tracks = props.tracks
    this.state = {
      paused: this.props.inProgress
    }
  }

  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    if (playlistId) {
      this.props.fetchPlaylist(playlistId)
    }
  }

  componentWillReceiveProps(newProps) {
    let id = this.props.match.params.playlistId;
    let newId = newProps.match.params.playlistId;

    if ( newId !== id) {
      this.props.fetchPlaylist(newId)
    }
  }

  render() {
    let tracks;
    let imageUrl = { backgroundImage: "image_url('album_default.jpg')" }
    let title;

    if (this.props.playlist) {
      tracks = this.props.tracks.map(track => (
        <Track props={this.props} track={track} key={track.id}/>
        )
      )
      title = this.props.playlist.title
      imageUrl = { backgroundImage: 'url(' + this.props.playlist.image_url + ')' }
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

export default Playlist;
