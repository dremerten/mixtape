import GenericNavBar from './GenericNavBar';
import { displayPlaylistForm } from '../actions/ui_actions';
import { connect } from 'react-redux';
import { SCROLL_BREAKPOINT } from '../util/constants';

const pathNames = {
  "PLAYLISTS": "/collection/playlists",
  "SONGS": "/collection/tracks",
  "ARTISTS": "/collection/artists",
};

const mapStateToProps = ({ ui: { scroll } }) => ({
  isVisible: scroll < SCROLL_BREAKPOINT,
  className: 'browse-nav-container',
  pathNames,
});

export default connect(
  mapStateToProps
)(GenericNavBar);
