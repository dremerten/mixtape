import GenericNavBar from './GenericNavBar';
import { displayPlaylistForm } from '../actions/ui_actions';
import { connect } from 'react-redux';
import { SCROLL_BREAKPOINT } from '../util/constants';


const mapStateToProps = state => {
  let pathNames = ["/collection/playlists", "/collection/tracks", "/collection/artists"];
  let linkNames = ["PLAYLISTS", "SONGS", "ARTISTS"];

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
