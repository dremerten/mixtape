import SaveSong from './SongSaveDropDownItem';
import AddToPlaylist from './AddTrackToPlaylist';
import AddToQueue from './AddTrackToQueue';
import CopySongLink from './CopySongLink';
import GenericDropdown from './GenericDropdown';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const listItems = [
  CopySongLink,
  AddToQueue,
  SaveSong,
  AddToPlaylist
];

const mapStateToProps = (state, { item, collectionId }) => {
  return {
    isSaved: state.session.currentUser.trackIds.includes(item.id),
    listItems,
    positionClass: 'offset-right',
    name: `track-dropdown-${item.id}`,
    clicked: Boolean(state.ui.dropdowns[`track-dropdown-${item.id}`])
  };
};

export default connect(mapStateToProps, null, null, { withRef: true })(GenericDropdown);
