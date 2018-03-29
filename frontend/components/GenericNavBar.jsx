import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import NewPlaylistButton from './buttons/NewPlaylistButton';

export default function({
  isVisible,
  pathNames,
  className }) {

  return (
    <nav className={className} style={ isVisible ? { display: "" } : { display: 'none' }}>
      <div className="browse-nav">
        {
          Object.keys(pathNames).map((name, index) => (
            <NavLink to={pathNames[name]}
              className='nav-link-item'
              activeClassName='nav-link-item nav-selected'
              key={index}
              >
              <span>{name}</span>
            </NavLink>
          ))
        }
      </div>
      <Route path='/collection' component={NewPlaylistButton}/>
    </nav>
  );
}
