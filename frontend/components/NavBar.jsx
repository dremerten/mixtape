import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="browse-nav-container">
    <div className="browse-nav">
      <Link to="/browse/featured" className="nav-link-item">FEATURED</Link>
      <Link to="/browse/genres" className="nav-link-item">GENRES &amp; MOODS</Link>
      <Link to="/browse/new_releases" className="nav-link-item">NEW RELEASES</Link>
    </div>
  </nav>
)

export default NavBar;
