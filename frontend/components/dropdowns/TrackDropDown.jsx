import SaveSong from './SongSaveDropDownItem';
import AddToPlaylist from './AddTrackToPlaylist';
import GenericDropDown from './GenericDropDown';
import { connect } from 'react-redux';

const listItems = [
  SaveSong,
  // AddToPlaylist
];

const mapStateToProps = (state, ownProps) => ({
  listItems,
  ownProps
});

export default connect(mapStateToProps, null, null, { withRef: true })(GenericDropDown);
