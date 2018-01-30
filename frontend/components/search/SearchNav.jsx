import { connect } from 'react-redux';
import { selectLinkPaths, selectLinkHeaders } from '../../selectors/search_selectors';
import GenericNavBar from '../GenericNavBar';

const mapStateToProps = (state, ownProps) => {
  const pathNames = ['/search/results'].concat(selectLinkPaths(state));
  const linkNames = ['TOP RESULTS'].concat(selectLinkHeaders(state));

  debugger
  return {
    pathNames,
    linkNames,
    className: 'browse-nav-container__no-margin__relative'
  };
};


export default connect(
  mapStateToProps
)(GenericNavBar);
