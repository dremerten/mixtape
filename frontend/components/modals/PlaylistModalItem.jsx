import React from 'react';
import { connect } from 'react-redux';
import { saveTrackToPlaylist } from '../../actions/track_actions';
import { clearAllAlerts } from '../../actions/alert_actions';
import MusicIndexItem from '../featured_playlists/GenericIndexItem';

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item,
    itemType: 'modalItem',
    imageUrl: ownProps.item.imageUrl
  };
};

const mapDispatchToProps = (dispatch, { trackId, item, handleCloseModal }) => {
  return {
    handleClick: () => {
      handleCloseModal();
      dispatch(saveTrackToPlaylist(trackId, item.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicIndexItem);
