import GenericNavBar from './GenericNavBar';
import { displayPlaylistForm } from '../actions/ui_actions';
import { connect } from 'react-redux';
import { SCROLL_BREAKPOINT } from '../util/constants';


const mapStateToProps = state => {
  let pathNames = ["/collection/playlists", "/collection/tracks"];
  let linkNames = ["PLAYLISTS", "SONGS"];

  return {
    isVisible: state.ui.scrollPosition < SCROLL_BREAKPOINT,
    pathNames,
    linkNames,
    isButtonVisible: true
  };
};

export default connect(
  mapStateToProps
)(GenericNavBar);
