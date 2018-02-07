import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleFollow } from '../../actions/follow_actions';

const mapStateToProps = ({ session }, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);

  return {
    currentUserFollows: session.currentUser.followIds.users.includes(userId),
    isUser: userId === session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = ownProps.match.params.userId;

  return {
    handleClick: () => dispatch(toggleFollow('user', userId))
  };
};

const UserFollowButton = props => {
  const buttonText = props.currentUserFollows ? "UNFOLLOW" : "FOLLOW";

  if (props.isUser) return null;

  return(
    <button
      className='user-page__follow-button'
      onClick={props.handleClick}>{buttonText}
    </button>
  );
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFollowButton));
