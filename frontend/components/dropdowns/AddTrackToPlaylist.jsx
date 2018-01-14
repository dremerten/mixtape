import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveTrackToPlaylist } from '../../actions/track_actions';
import { showModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: "Add To Playlist",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(showModal('userPlaylistModal', { trackId: ownProps.trackId }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
