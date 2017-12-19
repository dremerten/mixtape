import React from 'react';
import SessionFormContainer from './session_form_container';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

class NewSession extends React.Component {
  constructor(props) {
    super(props);

    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    this.props.login({
      email: 'Sennacy17',
      password: 'starwars'
    });
  }

  render() {
    return(
      <div className="homepage-wrap">
        <div className="content-container">
          <div className="session-actions">
            <div className="spinn-logo-homepage">
              <div className="logo-white"></div><strong>Spinn</strong>
            </div>
            <div className="button-container">
              <Link to="/signup" className="signup-link">
                <div className="signup-button">SIGN UP</div>
              </Link>
            </div>
            <div className="button-container">
              <Link to="/login" className="login-link">
                <div className="login-button">
                  LOGIN
                </div>
              </Link>
            </div>
          </div>
          <div className="static-content">
            <div className="static-content-header-div">
              <strong className="static-content-main-copy">Get the right music, right now</strong>
            </div>
            <div className="static-content-sub-header">
              <span>Listen to millions of songs for free</span>
            </div>
            <div className="static-content-span-div">
              <div>
                <i className="fa fa-check-circle"></i>
                Search &amp; discover music you'll love
              </div>
              <div>
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                Create playlists of your favorite music
              </div>
            </div>
          </div>
        </div>
        <div className="demo-login">
          <span className="demo-text">Just looking around? Login with a</span>
          <button onClick={this.demoLogin} className='demo-login-button'>DEMO</button>
        </div>

    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user))
});

export default connect(
  null,
  mapDispatchToProps
)(NewSession);
