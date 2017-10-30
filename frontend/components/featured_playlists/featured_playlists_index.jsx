import React from 'react';
import NavBar from '../NavBar';
import { isEmpty } from 'lodash';

class FeaturedPlaylistsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists({ featured: true });
  }

  render() {
    let playlists;

    if (!_.isEmpty(this.props.playlists)) {
      playlists = this.props.playlists.map(playlist => {
        let style = { backgroundImage: 'url(' + playlist.image_url + ')' };
        return (
          <li key={playlist.id} className="playlist-item">
            <div
              style={style}
              className="playlist-image"
              >
              <div className="shadow-light"></div>
            </div>
            <div className="playlist-name">
              {playlist.name}
            </div>
          </li>
        )
        }
      )
    }
    return(
      <div className="featured-playlists-container">
        <div className="list">
          <h1 className="playlists-header">Evening Jams</h1>
          <ul className="playlist-items">
            {playlists}
          </ul>
        </div>
      </div>
    );
  }
}

export default FeaturedPlaylistsIndex;
