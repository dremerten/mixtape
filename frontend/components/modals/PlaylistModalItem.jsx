import React from 'react';
import { connect } from 'react-redux';
import { saveTrackToPlaylist } from '../../actions/track_actions';
import { clearAllAlerts } from '../../actions/alert_actions';
import MusicIndexItem from '../music/music_index_item';

const mapStateToProps = (state, { playlist }) => ({
  item: playlist,
  itemType: 'modalItem'
});

const mapDispatchToProps = (dispatch, { trackId, playlist, handleCloseModal }) => ({
  handleClick: () => {
    handleCloseModal();
    dispatch(saveTrackToPlaylist(trackId, playlist.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicIndexItem);
