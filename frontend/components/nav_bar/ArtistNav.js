import GenericNavBar from '../shared/GenericNavBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;

  const pathNames = {
    "OVERVIEW": `/view/artists/${artistId}/overview`,
    "ABOUT": `/view/artists/${artistId}/about`,
  };

  return {
    isVisible: true,
    pathNames,
    className: 'browse-nav-container__no-margin__relative'
  };
};

export default withRouter(connect(
  mapStateToProps
)(GenericNavBar));
