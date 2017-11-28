import FeaturedPlaylistsIndex from './featured_playlists_index';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, removePlaylists } from '../../actions/playlist_actions';
import { fetchAlbums, removeAlbums } from '../../actions/album_actions';
import { setScrollPosition } from '../../actions/ui_actions';
// TODO: Create different containers for presentational components to avoid conditionals

const mapStateToProps = (state, ownProps) => {
  let path = ownProps.match.path;
  let indexItems;
  let itemType = "album";

  if (path.match(/featured/)) {
    indexItems = Object.keys(state.entities.playlists.byId)
                       .map(id => state.entities.playlists.byId[id]);

    itemType = "playlist";
  } else if (path.match(/collection/)) {
    indexItems = Object.keys(state.entities.playlists.currentUser)
                       .map(id => state.entities.playlists.currentUser[id]);
    itemType = "userPlaylist";
  } else {
    indexItems = Object.keys(state.entities.albums)
                       .map(id => state.entities.albums[id]);
  }

  return {
    indexItems,
    itemType,
    loading: state.ui.loading
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let path = ownProps.match.path;
  let fetchItems = (path.match(/featured|collection/) ? fetchPlaylists : fetchAlbums);
  let removeItems = (path.match(/featured|collection/) ? removePlaylists : removeAlbums);

  return {
    fetchItems: filters => dispatch(fetchItems(filters)),
    removeItems: () => dispatch(removeItems()),
    setScrollPosition: pos => dispatch(setScrollPosition(pos))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedPlaylistsIndex);
