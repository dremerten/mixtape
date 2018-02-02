import React from 'react';
import { connect } from 'react-redux';
import GenericMusicIndex from '../featured_playlists/GenericMusicIndex';
import AlbumIndexItem from '../featured_playlists/AlbumIndexItem';

const mapStateToProps = state => ({
  indexItems: state.search.albums.map(id => state.entities.albums[id]),
  indexComponent: AlbumIndexItem
});

const SearchAlbums = ({ indexItems, indexComponent }) => (
  <GenericMusicIndex IndexItem={indexComponent} indexItems={indexItems} />
)

export default connect(mapStateToProps)(SearchAlbums);
