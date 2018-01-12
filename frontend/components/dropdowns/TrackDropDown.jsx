import SaveSong from './SongSaveDropDownItem';
import AddToPlaylist from './AddTrackToPlaylist';
import GenericDropdown from './GenericDropdown';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const listItems = [
  SaveSong,
  AddToPlaylist
];

const mapStateToProps = (state, { trackId, collectionId }) => {
  const obj = {
    isSaved: state.session.currentUser.trackIds.includes(trackId),
    listItems,
    trackId,
    collectionId,
    name: `track-dropdown-${trackId}`,
    clicked: Boolean(state.ui.dropdowns[`track-dropdown-${trackId}`])
  };

  debugger
  return obj;
};

export default connect(mapStateToProps, null, null, { withRef: true })(GenericDropdown);
