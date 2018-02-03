import React from 'react';
import { connect } from 'react-redux';
import { saveTrack, removeTrack } from '../../actions/track_actions';

const mapStateToProps = (state, { currentTrack }) => {
  const isSaved = state.session.currentUser.trackIds.includes(currentTrack.id);

  return {
    isSaved
  };
};

const mapDispatchToProps = (dispatch, { currentTrack }) => {
  return {
    saveTrack: () => dispatch(saveTrack(currentTrack.id)),
    removeTrack: () => dispatch(removeTrack(currentTrack.id))
  };
};

const SaveTrackButton = (props) => {
  const buttonText = props.isSaved ? 'tickGreen' : 'plus';
  const toggleSave = props.isSaved ? props.removeTrack : props.saveTrack;

  return(
    <img
      src={staticAssets[buttonText]}
      onClick={toggleSave}
      className='nav-toggle-save'
      />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveTrackButton);
