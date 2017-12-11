import GenericNavBar from './GenericNavBar';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  let pathNames = ["/browse/featured", "/browse/genres", "/browse/newreleases"];
  let linkNames = ["FEATURED", "GENRES & MOODS", "NEW RELEASES"];
  return {
    scrollPosition: state.ui.scrollPosition,
    pathNames,
    linkNames,
    isButtonVisible: false
  };
};

export default connect(
  mapStateToProps
)(GenericNavBar);
