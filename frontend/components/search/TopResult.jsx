import React from 'react';
import ArtistIndexItem from '../featured_playlists/UserArtistIndexItem';
import AlbumIndexItem from '../featured_playlists/AlbumIndexItem';
import PlaylistIndexItem from '../featured_playlists/UserPlaylistIndexItem';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  let topResult;

  switch (state.search.top.type) {
    case 'Artist':
      topResult = ArtistIndexItem;
      break;
    case 'Album':
    case 'Track':
      topResult = AlbumIndexItem;
      break;
    case 'Playlist':
      topResult = PlaylistIndexItem;
      break;
  }

  return {
    topResult,
    item: state.search.top
  };
};

const Top = function({ topResult: TopResult, item }) {
  if (TopResult) {
    return (
      <TopResult item={item} />
    );
  } else {
    return null;
  }
};

export default connect(
  mapStateToProps
)(Top);
