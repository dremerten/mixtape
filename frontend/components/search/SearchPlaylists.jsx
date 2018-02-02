import React from 'react';
import { connect } from 'react-redux';
import GenericMusicIndex from '../featured_playlists/GenericMusicIndex';
import PlaylistIndexItem from '../featured_playlists/UserPlaylistIndexItem';

const mapStateToProps = state => ({
  indexItems: state.search.playlists.map(id => state.entities.playlists.byId[id]),
  indexComponent: PlaylistIndexItem
});

const SearchAlbums = ({ indexItems, indexComponent }) => (
  <GenericMusicIndex IndexItem={indexComponent} indexItems={indexItems} />
)

export default connect(mapStateToProps)(SearchAlbums);
