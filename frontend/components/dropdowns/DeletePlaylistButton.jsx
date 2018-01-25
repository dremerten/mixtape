import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePlaylist } from '../../actions/playlist_actions';
import { isUserPlaylist } from '../../selectors/playlist_selector';

const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists.byId[ownProps.match.params.playlistId];
  const visible = isUserPlaylist(playlist, state) ? "" : "hidden";

  return {
    buttonText: "Delete Playlist",
    visible
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;

  return {
    handleClick: () => {
      ownProps.history.push('/collection/playlists');
      dispatch(deletePlaylist(playlistId));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GenericDropDownItem));
