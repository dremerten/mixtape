import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveTrackToPlaylist } from '../../actions/track_actions';
import { showModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  buttonText: "Add To Playlist",
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: () => dispatch(showModal('userPlaylistModal'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
