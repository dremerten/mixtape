import { connect } from 'react-redux';
import { selectLinkPaths, selectLinkHeaders } from '../../selectors/search_selectors';
import GenericNavBar from '../GenericNavBar';

const mapStateToProps = (state, ownProps) => {
  const pathNames = selectLinkPaths(state);
  const linkNames = selectLinkHeaders(state);

  return {
    pathNames,
    linkNames,
    className: 'search__nav--narrow'
  };
};


export default connect(
  mapStateToProps
)(GenericNavBar);
