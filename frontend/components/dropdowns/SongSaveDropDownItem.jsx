import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveTrack, removeTrack } from '../../actions/track_actions';
import { clearAllAlerts } from '../../actions/alert_actions';

const mapStateToProps = (state, { trackId, isSaved }) => {
  const buttonText = (isSaved ? 'Remove Song' : 'Save Song');
  
  return {
    buttonText,
  };
};

const mapDispatchToProps = (dispatch, { trackId, isSaved }) => {
  const action = (isSaved ? removeTrack : saveTrack );

  return {
    handleClick: () => dispatch(action(trackId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
