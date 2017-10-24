import React from 'react';
import SessionFormContainer from './session_form_container';

const NewSession = () => (
  <div className="homepage-wrap">
    <div className="content-container">
      <div className="session-actions">
        <div className="login-button">
          <Link to="/login" className="login-link">LOGIN</Link>
        </div>
        <div>

        </div>
        <div className="sigup-button">
          <Link to="/signup" className="signup-link">LOGIN</Link>
        </div>
      </div>
      <div className="static-content">

      </div>
    </div>
  </div>
)

export const NewSession;
