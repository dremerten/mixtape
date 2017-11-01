import React from 'react';
import { Link } from 'react-router-dom'
class PlaylistsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.playlist = props.playlist

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();

    this.props.history.push(`/browse/playlists/${this.playlist.id}`)
  }

  render() {
    let background = { backgroundImage: 'assets/album_default.jpg' }
    let playlistName;
    let id = 1

    if (this.playlist) {
      background = { backgroundImage: 'url(' + this.playlist.image_url + ')' };
      playlistName = this.playlist.name
      id = this.playlist.id
    }

    return(
      <li key={id} className="playlist-item">
        <button
          style={background}
          className="playlist-image"
          onClick={this.handleClick}
          >
          <div className="shadow-light"></div>
          <div className="overlay"></div>
        </button>
        <div className="playlist-name">
          {playlistName}
        </div>
      </li>
    )
  }
}

export default PlaylistsIndexItem;
