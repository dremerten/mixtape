import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { follow, unfollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const buttonText = ownProps.followed ? 'UNFOLLOW' : 'FOLLOW';

  return {
    buttonText
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.followed ? unfollow : follow);
  const artistId = ownProps.match.params.artistId;

  return {
    handleClick: () => dispatch(action('artist', artistId))
  };
};

const ArtistFollowButton = function({ handleClick, buttonText, className }) {
  return(
    <button
      className='artist-follow-button'
      onClick={handleClick}>{buttonText}
    </button>
  );
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistFollowButton));
