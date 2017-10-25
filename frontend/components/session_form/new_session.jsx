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
        <h1>Splash Page</h1>
        <div className="content-container">
          <div className="session-actions">
            <div className="login-button">
              <Link to="/login" className="login-link">LOGIN</Link>
            </div>
            <div>
            </div>
            <div className="sigup-button">
              <Link to="/signup" className="signup-link">SIGN UP</Link>
            </div>
          </div>
          <div className="static-content">

          </div>
        </div>
      </div>
    )
  }
}

export default NewSession;
