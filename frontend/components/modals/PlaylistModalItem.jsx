import React from 'react';
import { connect } from 'react-redux';
import { saveTrackToPlaylist } from '../../actions/playlist_actions';
import MusicIndexItem from '../music/music_index_item';

const mapStateToProps = (state, { playlist }) => ({
  item: playlist,
});

const mapDispatchToProps = (dispatch, { playlist, track }) => ({
  handleClick: () => dispatch(saveTrackToPlaylist(track.id, playlist.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicIndexItem);
