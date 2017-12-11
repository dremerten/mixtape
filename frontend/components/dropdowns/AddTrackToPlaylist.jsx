import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveTrackToPlaylist } from '../../actions/track_actions';

const mapStateToProps = (state, { trackId, collectionId }) => ({
  buttonText: "Add To Playlist",
});

const mapDispatchToProps = (dispatch, { trackId, collectionId }) => ({
  handleClick: () => dispatch(saveTrackToPlaylist(trackId, collectionId))
});

export default connect(
  mapStateToProps
)(GenericDropDownItem);
