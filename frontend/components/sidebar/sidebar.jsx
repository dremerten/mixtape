import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return(
    <div className="sidebar">
      <nav className="nav-links">
        <div className="nav-expand">
          <ul>
            <div className="sidebar-header">
              <Link to='/browse/featured' className='sidebar-logo'></Link>
            </div>
            <div className="sidebar-group">
              <li className="sidebar-item">Search</li>
            </div>
            <div className="sidebar-group">
              <li className="sidebar-item">Home</li>
              <li className="sidebar-item">Your Music</li>
            </div>
          </ul>
        </div>
        <ul>
          <li className="sidebar-item">Install App</li>
        </ul>
        <div className="session-info">
          <div className="user-widget">
            <Link to="/settings/acount">
              <img className="user-avatar" src={currentUser.avatar_url} />
              <span className="user-link">{currentUser.email}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
