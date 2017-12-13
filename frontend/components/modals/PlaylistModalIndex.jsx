import React from 'react';
import PlaylistModalItem from './PlaylistModalItem';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  playlists: Object.keys(state.entities.playlists.currentUser)
                   .map(id => state.entities.playlists.currentUser[id])
});

export default connect(mapStateToProps)(props => (
  props.playlists.map((playlist, index) => (
    <PlaylistModalItem
      key={index}
      playlist={playlist}
      ></PlaylistModalItem>
  ))
));
