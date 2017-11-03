import React from 'react';
import NavBar from '../NavBar';
import { isEmpty } from 'lodash';
import PlaylistsIndexItem from './playlists_index_item';

class FeaturedPlaylistsIndex extends React.Component {

  componentDidMount() {
    if (this.props.match.path.match(/featured/)) {
      this.props.fetchPlaylists({ featured: true });
    } else if (this.props.match.path.match(/collection/)) {
      this.props.fetchPlaylists();
    }
  }

  componentWillUnmount() {
    this.props.removePlaylists();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.path == this.props.match.path) {
      return;
    } else if (newProps.match.path.match(/featured/)) {
      this.props.fetchPlaylists({ featured: true });
    } else if (newProps.match.path.match(/collection/)) {
      this.props.fetchPlaylists();
    }
  }

  render() {
    let playlists;

    if (!_.isEmpty(this.props.playlists)) {
      playlists = this.props.playlists.map(playlist => (
        <PlaylistsIndexItem playlist={playlist} history={this.props.history} key={playlist.id}/>
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
