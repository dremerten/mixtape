import SaveSong from './SongSaveDropDownItem';
import AddToPlaylist from './AddTrackToPlaylist';
import GenericDropdown from './GenericDropdown';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const listItems = [
  SaveSong,
  AddToPlaylist
];

const mapStateToProps = (state, { trackId, collectionId }) => ({
  listItems,
  trackId,
  collectionId
});

export default connect(mapStateToProps, null, null, { withRef: true })(GenericDropdown);
