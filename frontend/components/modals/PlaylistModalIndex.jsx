import React from 'react';
import PlaylistModalItem from './PlaylistModalItem';
import { connect } from 'react-redux';
import { userPlaylists } from '../../selectors/playlist_selector';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: userPlaylists(state),
    trackId: ownProps.trackId
  };
};

export default connect(mapStateToProps)(props => {
  return props.playlists.map((playlist, index) => {
    return (
      <PlaylistModalItem
      key={index}
      item={playlist}
      { ...props }
      ></PlaylistModalItem>
    );
  });
});
