import GenericNavBar from './GenericNavBar';
import { displayPlaylistForm } from '../actions/ui_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  let pathNames = ["/collection/playlists", "/collection/tracks"];
  let linkNames = ["PLAYLISTS", "SONGS"];
  return {
    scrollPosition: state.ui.scrollPosition,
    pathNames,
    linkNames
  };
};

export default connect(
  mapStateToProps
)(GenericNavBar);
