import CopyPlaylistLink from './CopyPlaylistLink';
import DeletePlaylist from './DeletePlaylistButton';
import GenericDropdown from './GenericDropdown';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const listItems = [
  CopyPlaylistLink,
  DeletePlaylist
];

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;

  return {
    listItems,
    positionClass: '',
    clicked: Boolean(state.ui.dropdowns[`playlist-dropdown-${playlistId}`])
  };
};


export default withRouter(connect(mapStateToProps)(GenericDropdown));
