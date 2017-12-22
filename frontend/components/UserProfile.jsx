import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const UserProfile = ({ currentUser, logout }) => (
  <div className='user-page-container'>
    <div className='user-info'>
      <img src={currentUser.avatar_url} />
      <button onClick={logout}>LOGOUT</button>
      <a href='https://github.com/dwebster17'>DEVELOPER INFO</a>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
