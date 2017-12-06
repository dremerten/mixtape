import SaveSong from './SongSaveDropDownItem';
import AddToPlaylist from './AddTrackToPlaylist';
import GenericDropDown from './GenericDropDown';
import { connect } from 'react-redux';

const listItems = [SaveSong, AddToPlaylist];

const mapStateToProps = state => ({
  listItems
});

export default connect(mapStateToProps)(GenericDropDown);
