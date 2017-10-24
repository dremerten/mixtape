import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  loggedIn: !!(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.match.path.match(/.+login/)) ? login : signup
  const formType = (ownProps.match.path.match(/.+login/)) ? "login" : "signup"
  return {
    processForm: (user) => dispatch(action(user)),
    formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
