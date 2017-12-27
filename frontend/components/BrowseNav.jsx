import GenericNavBar from './GenericNavBar';
import { connect } from 'react-redux';
import { SCROLL_BREAKPOINT } from '../util/constants';

const mapStateToProps = state => {
  const pathNames = ["/browse/featured", "/browse/genres", "/browse/newreleases"];
  const linkNames = ["FEATURED", "GENRES & MOODS", "NEW RELEASES"];
  
  return {
    isVisible: state.ui.scrollPosition < SCROLL_BREAKPOINT,
    pathNames,
    linkNames,
    isButtonVisible: false
  };
};

export default connect(
  mapStateToProps
)(GenericNavBar);
