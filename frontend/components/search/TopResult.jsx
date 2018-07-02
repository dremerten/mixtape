import React from 'react';
import Artist from '../featured_playlists/UserArtistIndexItem';
import Album from '../featured_playlists/AlbumIndexItem';
import Playlist from '../featured_playlists/UserPlaylistIndexItem';
import User from '../users/UserIndexItem';
import { connect } from 'react-redux';

const resultComponents = {
  Artist,
  Album,
  Track: Album,
  User,
  Playlist,
};

const mapStateToProps = state => {
  return {
    component: resultComponents[state.search.top.type],
    data: state.search.top
  };
};

const TopResult = function({ component: Component, data }) {
  if (!Component) return null;

  return (
    <Component
      item={data}
      />
  );
};

export default connect(
  mapStateToProps
)(TopResult);
