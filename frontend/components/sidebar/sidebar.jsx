import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = ({ currentUser }) => {
  let username = currentUser.email

  if (username.length > 13) {
    username = username.slice(0, 13) + '...';
  }

  return(
    <div className="sidebar">
      <nav className="nav-links">
        <div className="nav-expand">
          <ul>
            <div className="sidebar-header">
              <Link to='/browse/featured' className='sidebar-logo'></Link>
            </div>
            <NavLink to="/browse/search" activeClassName='search-selected'>
              <div className="sidebar-group with-icon">
                <li className="sidebar-item">Search</li>
                <i className="sidebar-item fa fa-search" aria-hidden="true"></i>
              </div>
          </NavLink>
            <div className="sidebar-group">
              <NavLink to="/browse/featured"className="sidebar-item" activeClassName="sidebar-item-selected">Home</NavLink>
              <NavLink to="/collection/playlists" className="sidebar-item" activeClassName="sidebar-item-selected"><li>Your Music</li></NavLink>
            </div>
          </ul>
        </div>
        <ul>
          <li className="sidebar-item">Install App</li>
        </ul>
        <div className="session-info">
          <div className="user-widget">
            <Link to="/account/profile">
              <img className="user-avatar" src={currentUser.avatar_url} />
              <span className="user-link">{username}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
