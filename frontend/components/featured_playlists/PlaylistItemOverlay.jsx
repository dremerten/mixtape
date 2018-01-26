import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylistThenPlay } from '../../actions/playlist_actions';
import { playFullCollection } from '../../actions/audio_actions';
import PlayButton from './OverlayPlayButton';

const mapStateToProps = ({ nowPlaying }, { id }) => {
  const context = `playlists-${id}`;

  return {
    inProgress: nowPlaying.inProgress && nowPlaying.context === context
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  handlePlay: () => dispatch(playFullCollection(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
