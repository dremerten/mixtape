import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveTrackToPlaylist } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  buttonText: "Add To Playlist",
  handleClick: ownProps.handleOpenModal
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   handleClick: () =>
// });

export default connect(
  mapStateToProps
)(GenericDropDownItem);
