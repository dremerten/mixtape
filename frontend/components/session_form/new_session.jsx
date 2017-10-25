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
            <h1>Get the right music, right now</h1>
            <h2>Listen to millions of songs for free</h2>
            <h2>Search and discover music you'll love</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default NewSession;
