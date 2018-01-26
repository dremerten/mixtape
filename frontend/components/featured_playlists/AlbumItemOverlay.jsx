import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbumThenPlay } from '../../actions/album_actions';
import { playFullCollection } from '../../actions/audio_actions';
import PlayButton from './OverlayPlayButton';

const mapStateToProps = ({ nowPlaying }, { id }) => {
  const context = `albums-${id}`;

  return {
    inProgress: nowPlaying.inProgress && nowPlaying.context === context
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  handlePlay: () => dispatch(fetchAlbumThenPlay(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
