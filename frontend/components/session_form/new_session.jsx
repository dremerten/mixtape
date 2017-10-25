import React from 'react';
import SessionFormContainer from './session_form_container';
import { Route, Link } from 'react-router-dom';

class NewSession extends React.Component {


  // componentWillReceiveProps(newProps) {
  //
  // }

  render() {
    return(
      <div className="homepage-wrap">
        <div className="content-container">
          <div className="session-actions">
            <div className="spinn-logo-homepage">
              <strong>Spinn</strong>
            </div>
            <div>
            </div>
            <div className="signup-button">
              <Link to="/signup" className="signup-link">SIGN UP</Link>
            </div>
            <div className="login-button">
              <Link to="/login" className="login-link">LOGIN</Link>
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
                <i class="fa fa-check-circle"></i>
                Search &amp; discover music you'll love
              </div>
              <div>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                Create playlists of your favorite music
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewSession;
