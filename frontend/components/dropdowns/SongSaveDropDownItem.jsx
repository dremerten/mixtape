import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveTrack, removeTrack } from '../../actions/track_actions';

const mapStateToProps = (_, { isSaved }) => {
  const buttonText = (isSaved ? 'Remove from Your Music' : 'Save to Your Music');

  return {
    buttonText,
  };
};

const mapDispatchToProps = (dispatch, { item, isSaved }) => {
  const action = (isSaved ? removeTrack : saveTrack );

  return {
    handleClick: () => dispatch(action(item.id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
