import React from 'react';
import { Link } from 'react-router-dom';

class MusicIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.item;
    this.state = { loaded: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState({ loaded: true });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.itemType == "playlist") {
      this.props.history.push(`/browse/playlists/${this.item.id}`);
    } else if (this.props.itemType == "userPlaylist") {
      this.props.history.push(`/collection/playlists/${this.item.id}`);
    } else if (this.props.itemType == "album") {
      this.props.history.push(`/browse/albums/${this.item.id}`);
    } else {
      this.props.handleClick();
    }
  }

  render() {
    const { loaded } = this.state;

    const itemName = (this.props.itemType == "album" ? this.item.title : this.item.name);
    const id = this.item.id;
    const albumArtist = (this.props.itemType == "album" ? this.item.artist : "");

    return(
      <li key={id} className="playlist-item">
        <figure
          className="playlist-loading"
          onClick={this.handleClick}
          >
          <img src={this.item.imageUrl}
            onLoad={this.handleLoad}
            style={ loaded ? { display: ''} : {display: 'none'} }
            className="playlist-image"
            />
          <div className="shadow-light"></div>
          <div className="overlay"></div>
        </figure>
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
