import React from 'react';
import { connect } from 'react-redux';
import { saveTrackToPlaylist } from '../../actions/track_actions';
import { clearAllAlerts } from '../../actions/alert_actions';
import MusicIndexItem from '../featured_playlists/GenericIndexItem';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    item: ownProps.item,
    itemType: 'modalItem',
    imageUrl: ownProps.item.imageUrl
  };
};

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
