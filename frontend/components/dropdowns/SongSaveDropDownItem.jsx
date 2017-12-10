import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
    buttonText: "Save Song",
    trackId: ownProps.trackId
});

const mapDispatchToProps = dispatch => ({
  handleClick: trackId => dispatch(saveTrack(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
