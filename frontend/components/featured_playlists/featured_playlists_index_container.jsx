import FeaturedPlaylistsIndex from './featured_playlists_index';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = state => ({
  playlists: Object.keys(state.entities.playlists).map(id => state.entities.playlists[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: filters => dispatch(fetchPlaylists(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedPlaylistsIndex);
