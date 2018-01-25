import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { fetchTrackThenAddToQueue } from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: "Add to Queue",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(fetchTrackThenAddToQueue(ownProps.item.id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
