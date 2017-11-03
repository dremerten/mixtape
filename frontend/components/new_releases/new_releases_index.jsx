import React from 'react';
import AlbumIndexItem from '../albums/album_index_item'
import { fetchAlbum, fetchAlbums, removeAlbums } from '../../actions/album_actions';
import { connect } from 'react-redux';

class NewReleasesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAlbums({ order: 'recent' })
  }

  componentWillUnmount() {
    this.props.removeAlbums();
  }

  render() {
    let albums;

    if (!_.isEmpty(this.props.albums)) {
      albums = this.props.albums.map(album => (
        <AlbumIndexItem album={album} history={this.props.history} key={album.id}/>
      ));
    }

    return(
      <div className="album-index-container">
        <div className="list">
          <h1 className="playlists-header">Our Newest Releases</h1>
          <ul className="playlist-items">
            {albums}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id])
})

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum()),
  fetchAlbums: filter => dispatch(fetchAlbums(filter)),
  removeAlbums: () => dispatch(removeAlbums())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewReleasesIndex);
