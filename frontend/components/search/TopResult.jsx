import React from 'react';
import ArtistIndexItem from '../featured_playlists/UserArtistIndexItem';
import AlbumIndexItem from '../featured_playlists/AlbumIndexItem';
import PlaylistIndexItem from '../featured_playlists/UserPlaylistIndexItem';
import UserIndexItem from '../users/UserIndexItem';
import { connect } from 'react-redux';

const resultComponents = {
  Artist: ArtistIndexItem,
  Album: AlbumIndexItem,
  Track: AlbumIndexItem,
  User: UserIndexItem,
  Playlist: PlaylistIndexItem,
};

const mapStateToProps = state => {
  // let topResult;
  //
  //
  // switch (state.search.top.type) {
  //   case 'Artist':
  //     topResult = ArtistIndexItem;
  //     break;
  //   case 'Album':
  //   case 'Track':
  //     topResult = AlbumIndexItem;
  //     break;
  //   case 'User':
  //     topResult = UserIndexItem;
  //     break;
  //   case 'Playlist':
  //     topResult = PlaylistIndexItem;
  //     break;
  // }

  return {
    topResult: resultComponents[state.search.top.type]
    item: state.search.top
  };
};

const Top = function({ topResult: TopResult, item }) {
  if (!TopResult) return null;

  return (
    <TopResult
      item={item}
      />
  );
};

export default connect(
  mapStateToProps
)(Top);
