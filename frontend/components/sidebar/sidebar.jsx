import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = ({ currentUser }) => {
  let { email } = currentUser;

  if (email.length > 13) {
    email = email.slice(0, 13) + '...';
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
              <NavLink to="/browse/featured" className="sidebar-item" activeClassName="sidebar-item-selected">Home</NavLink>
              <NavLink to="/collection/playlists" className="sidebar-item" activeClassName="sidebar-item-selected"><li>Your Music</li></NavLink>
            </div>
          </ul>
        </div>
        <ul>
          <a href='https://github.com/dwebster17' target="_blank">Developer Info</a>
        </ul>
        <div className="session-info">
          <div className="user-widget">
            <Link to="/account/profile">
              <img src={currentUser.avatar_url} />
              <span>{email}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
