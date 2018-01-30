import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import NewPlaylistButton from './buttons/NewPlaylistButton';

export default function({ isVisible, pathNames, linkNames, isButtonVisible, scrollPosition, className }) {
  return (
    <nav className={className} style={ isVisible ? { display: "" } : { display: 'none' }}>
      <div className="browse-nav">
        {
          pathNames.map((path, index) => (
            <NavLink to={path}
              className='nav-link-item'
              activeClassName='nav-link-item nav-selected'
              key={index}
              >
              <span>{linkNames[index]}</span>
            </NavLink>
          ))
        }
      </div>
      <Route path='/collection' component={NewPlaylistButton}/>
    </nav>
  );
}
