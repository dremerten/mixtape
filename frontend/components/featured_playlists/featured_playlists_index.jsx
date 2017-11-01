import React from 'react';
import NavBar from '../NavBar';
import { isEmpty } from 'lodash';
import PlaylistsIndexItem from './playlists_index_item';

class FeaturedPlaylistsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists({ featured: true });
  }

  render() {
    let playlists;

    if (!_.isEmpty(this.props.playlists)) {
      playlists = this.props.playlists.map(playlist => (
        <PlaylistsIndexItem playlist={playlist} history={this.props.history}/>
        )
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
