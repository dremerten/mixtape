import zipObject from 'lodash/zipObject';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectLinkPaths, selectLinkHeaders } from '../../selectors/search_selectors';
import GenericNavBar from '../shared/GenericNavBar';


const mapStateToProps = (state, ownProps) => {
  
  const pathNameArray = selectLinkPaths(state);
  const linkNameArray = selectLinkHeaders(state);
  const pathNames = zipObject(linkNameArray, pathNameArray);

  return {
    pathNames,
    className: 'search__nav--narrow'
  };
};


export default withRouter(connect(mapStateToProps)(GenericNavBar));
