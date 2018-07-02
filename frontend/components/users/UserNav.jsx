import GenericNavBar from '../shared/GenericNavBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }, ownProps) => {
  const userId = ownProps.match.params.userId;
  const followerCount = entities.users[userId].followers.length;
  const followingCount = entities.users[userId].followees.length;

  const pathNames = [
    `/users/${userId}/playlists`,
    `/users/${userId}/followers`,
    `/users/${userId}/following`,
  ];

  const linkNames = [
    "PUBLIC PLAYLISTS",
    `FOLLOWERS (${followerCount})`,
    `FOLLOWING (${followingCount})`
  ];

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
