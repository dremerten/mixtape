import GenericNavBar from './GenericNavBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;
  const pathNames = [`/artists/${artistId}/overview`, `/artists/${artistId}/about`];
  const linkNames = ["OVERVIEW", "ABOUT"];

  return {
    isVisible: true,
    pathNames,
    linkNames,
    isButtonVisible: false,
    className: 'browse-nav-container__no-margin__relative'
  };
};

export default withRouter(connect(
  mapStateToProps
)(GenericNavBar));
