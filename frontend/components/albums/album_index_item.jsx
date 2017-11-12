import React from 'react';
import { Link } from 'react-router-dom'
class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.album = props.album

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();

    this.props.history.push(`/browse/albums/${this.album.id}`)
  }

  
  render() {
    let albumName, albumArtist;
    let background = { backgroundImage: 'assets/album_default.jpg' }
    let id = 1

    if (this.album) {
      background = { backgroundImage: 'url(' + this.album.artwork_url + ')' };
      albumName = this.album.title
      albumArtist = this.album.artist
      id = this.album.id
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
          {albumName}
        </div>
        <div className='author artist'>
          {albumArtist}
        </div>
      </li>
    )
  }
}

export default AlbumIndexItem;
