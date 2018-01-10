import GenericNavBar from './GenericNavBar';
import { displayPlaylistForm } from '../actions/ui_actions';
import { connect } from 'react-redux';
import { SCROLL_BREAKPOINT } from '../util/constants';


const mapStateToProps = state => {
  let pathNames = ["/collection/playlists", "/collection/tracks"];
  let linkNames = ["PLAYLISTS", "SONGS"];

  return {
    isVisible: state.ui.scroll < SCROLL_BREAKPOINT,
    pathNames,
    linkNames,
    isButtonVisible: true,
    className: 'browse-nav-container'
  };
};

export default connect(
  mapStateToProps
)(GenericNavBar);
