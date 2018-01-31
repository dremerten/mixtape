import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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


export default withRouter(connect(mapStateToProps)(GenericNavBar));
