import React from 'react';
import { connect } from 'react-redux';
import GenericMusicIndex from '../featured_playlists/GenericMusicIndex';
import ArtistIndexItem from '../featured_playlists/UserArtistIndexItem';

const SearchArtists = props => (
  <GenericMusicIndex IndexItem={ArtistIndexItem} indexItems={props.indexItems}/>
);

const mapStateToProps = state => {
  return {
    indexItems: state.search.artists.map(id => state.entities.artists[id]) || []
  };
};

export default connect(mapStateToProps)(SearchArtists);
