import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveTrack } from '../../actions/track_actions';
import { clearAllAlerts } from '../../actions/alert_actions';

const mapStateToProps = (state, { trackId}) => ({
  buttonText: "Save Song",
});

const mapDispatchToProps = (dispatch, { trackId }) => ({
  handleClick: () => dispatch(saveTrack(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
