import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { addTrackToQueue } from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: "Add To Queue",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(addTrackToQueue(ownProps.item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
