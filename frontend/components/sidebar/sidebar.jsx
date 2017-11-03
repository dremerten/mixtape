import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ currentUser }) => {
  return(
    <div className="sidebar">
      <nav className="nav-links">
        <div className="nav-expand">
          <ul>
            <div className="sidebar-header">
              <Link to='/browse/featured' className='sidebar-logo'></Link>
            </div>
            <Link to="/browse/search" className="search-lin">
              <div className="sidebar-group with-icon">
                <li className="sidebar-item">Search</li>
                <i className="sidebar-item fa fa-search" aria-hidden="true"></i>
              </div>
          </Link>
            <div className="sidebar-group">
              <Link to="/browse/featured"className="sidebar-item">Home</Link>
              <Link to="/collection/playlists" className="sidebar-item"><li>Your Music</li></Link>
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
