import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { followsCurrentUser } from '../../selectors/user_selectors';

const UserHeader = props => {
  const followState = (() => {
    if (props.followsCurrentUser) {
      return <span>USER &middot; FOLLOWS YOU</span>;
    } else {
      return <span>USER</span>;
    }
  })();

  return (
    <div className='artist-header user-page-header'>
      <div className='user-header-items'>
        <div className='user-header__image--container'>
          <img src={props.user.imageUrl} className='user-header__image' />
        </div>
        <div className='user-header__name'>{props.user.name}</div>
        <span className='user-header__info'>{followState}</span>
      </div>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];

  return {
    user,
    followsCurrentUser: followsCurrentUser(user, state)

  };
};

export default withRouter(connect(mapStateToProps)(UserHeader));
