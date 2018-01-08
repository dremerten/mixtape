import React from 'react';
import PlaylistModalItem from './PlaylistModalItem';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  playlists: state.session.currentUser.playlistIds.map(id => (
                   state.entities.playlists.byId[id])),
  trackId: ownProps.trackId
});

export default connect(mapStateToProps)(props => {
  return props.playlists.map((playlist, index) => (
    <PlaylistModalItem
      key={index}
      item={playlist}
      { ...props }
      ></PlaylistModalItem>
  ));
});
