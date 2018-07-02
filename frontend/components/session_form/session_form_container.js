import { connect } from 'react-redux';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';
import { removeSessionErrors } from '../../actions/session_actions';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = (ownProps.match.path.match(/.+login/)) ? "login" : "signup";
  const action = (formType === "login") ? login : signup;
  return {
    processForm: (user) => dispatch(action(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    formType
  };
};

export const LoginFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));

export const SignupFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
