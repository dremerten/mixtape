import GenericNavBar from './GenericNavBar';
import { connect } from 'react-redux';
import { SCROLL_BREAKPOINT } from '../util/constants';

// const pathNames = {
//   "FEATURED": "/browse/featured",
//   "GENRES & MOODS": "/browse/genres",
//   "NEW RELEASES": "/browse/newreleases"
// };
const pathNames = {
  "FEATURED": "/browse/featured",
  "NEW RELEASES": "/browse/newreleases"
};

const mapStateToProps = ({ ui: { scroll } }) => ({
  isVisible: scroll < SCROLL_BREAKPOINT,
  pathNames,
  className: 'browse-nav-container'
});

export default connect(
  mapStateToProps
)(GenericNavBar);
