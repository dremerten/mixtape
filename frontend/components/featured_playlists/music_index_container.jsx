import GenericMusicIndex from './music_index';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylists, removePlaylists } from '../../actions/playlist_actions';
import { fetchAlbums, removeAlbums } from '../../actions/album_actions';
import { setScrollPosition } from '../../actions/ui_actions';
import { setHeader } from '../../selectors/DynamicHeaderSelector';
// TODO: Create different containers for presentational components to avoid conditionals

const mapStateToProps = (state, ownProps) => {
  let path = ownProps.location.pathname;
  let indexItems, header, itemType, background;

  if (path.match(/featured/)) {
    indexItems = Object.keys(state.entities.playlists.byId)
                       .map(id => state.entities.playlists.byId[id]);
    itemType = "playlist";
    header = setHeader();
    background = { background: 'linear-gradient(rgb(43, 64, 110), rgb(4, 6, 11) 85%) fixed' };
  } else if (path.match(/collection/)) {
    indexItems = Object.keys(state.entities.playlists.byId)
                       .map(id => state.entities.playlists.byId[id]);
    itemType = "userPlaylist";
    header = 'Your Playlists';
    background = { background: 'linear-gradient(rgb(142, 11, 61), rgb(14, 1, 6) 85%) fixed' };
  } else {
    indexItems = Object.keys(state.entities.albums)
                       .map(id => state.entities.albums[id]);
    itemType = 'album';
    header = "What's Trending";
    background = { background: 'linear-gradient(rgb(15, 138, 115), rgb(1, 13, 11) 85%) fixed' };
  }

  return {
    indexItems,
    itemType,
    header,
    background,
    loading: state.ui.loading
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let path = ownProps.location.pathname;
  let fetchItems = (path.match(/featured|collection/) ? fetchPlaylists : fetchAlbums);
  let removeItems = (path.match(/featured|collection/) ? removePlaylists : removeAlbums);
  let filters = (path.match(/featured/)) ? { type: 'featured' } : {};
  return {
    fetchItems: () => dispatch(fetchItems(filters)),
    removeItems: () => dispatch(removeItems()),
    setScrollPosition: pos => dispatch(setScrollPosition(pos))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericMusicIndex));
