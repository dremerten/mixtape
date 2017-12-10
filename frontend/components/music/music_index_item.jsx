import React from 'react';
import { Link } from 'react-router-dom';

class MusicIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.item;

    this.handleClick = this.handleClick.bind(this);
    this.paths = {
      "playlist": `/browse/playlists/${this.item.id}`,
      "userPlaylist": `/collection/playlists/${this.item.id}`,
      "album": `/browse/albums/${this.item.id}`
    };
  }

  handleClick(e) {
    e.preventDefault();

    if (this.props.itemType == "playlist") {
      this.props.history.push(`/browse/playlists/${this.item.id}`);
    } else if (this.props.itemType == "userPlaylist") {
      this.props.history.push(`/collection/playlists/${this.item.id}`);
    } else {
      this.props.history.push(`/browse/albums/${this.item.id}`);
    }
  }

  render() {
    let itemName, albumArtist, background;
    let id = 1;

    if (this.item) {
      background = { backgroundImage: 'url(' + this.item.imageUrl + ')' };
      itemName = (this.props.itemType == "album" ? this.item.title : this.item.name);
      id = this.item.id;
      albumArtist = (this.props.itemType == "album" ? this.item.artist : "");
    }

    return(
      <li key={id} className="playlist-item">
        <button to={this.paths[this.props.itemType]}
          style={background}
          className="playlist-image"
          onClick={this.handleClick}
          >
          <div className="shadow-light"></div>
          <div className="overlay"></div>
        </button>
        <div className="playlist-name">
          {itemName}
        </div>
        <div className='author artist'>
          {albumArtist}
        </div>
      </li>
    );
  }
}

export default MusicIndexItem;
