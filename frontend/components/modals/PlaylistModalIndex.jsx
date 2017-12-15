import React from 'react';
import PlaylistModalItem from './PlaylistModalItem';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  playlists: Object.keys(state.entities.playlists.currentUser)
                   .map(id => state.entities.playlists.currentUser[id]),
  trackId: ownProps.trackId
});

export default connect(mapStateToProps)(props => {
  return props.playlists.map((playlist, index) => (
    <PlaylistModalItem
      key={index}
      playlist={playlist}
      { ...props }
      ></PlaylistModalItem>
  ));
});
