import FeaturedPlaylistsIndex from './featured_playlists_index';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, removePlaylists } from '../../actions/playlist_actions';
import { fetchAlbums, removeAlbums } from '../../actions/album_actions';


const mapStateToProps = (state, ownProps) => {
  let path = ownProps.match.path;
  let indexItems;
  let itemType = "album";

  if (path.match(/featured|collection/)) {
    indexItems = Object.keys(state.entities.playlists)
                       .map(id => state.entities.playlists[id]);
    itemType = (path.match(/collection/) ? "userPlaylist" : "playlist");
  } else {
    indexItems = Object.keys(state.entities.albums)
                       .map(id => state.entities.albums[id])
  };

  return { indexItems, itemType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let path = ownProps.match.path;
  let fetchItems = (path.match(/featured|collection/) ? fetchPlaylists : fetchAlbums);
  let removeItems = (path.match(/featured|collection/) ? removePlaylists : removeAlbums);

  return {
    fetchItems: filters => dispatch(fetchItems(filters)),
    removeItems: () => dispatch(removeItems())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedPlaylistsIndex);
