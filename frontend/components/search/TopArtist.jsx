import React from 'react';
import ArtistIndexItem from '../featured_playlists/UserArtistIndexItem';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    topArtist: state.entities.artists[state.entities.tracks[state.search.tracks[0]].artistId]
  };
};

const TopArtist = function({ topArtist }) {
  return (
    <ArtistIndexItem item={topArtist} />
  );
};

export default connect(
  mapStateToProps
)(TopArtist);
