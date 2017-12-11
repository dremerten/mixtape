import React from 'react';
import { NavLink } from 'react-router-dom';
import NewPlaylistButton from './buttons/NewPlaylistButton';

export default function({ pathNames, linkNames, isButtonVisible, scrollPosition }) {
  return (
    <nav className="browse-nav-container" style={{ display: "" }}>
      <div className="browse-nav">
        {
          pathNames.map( (path, index) => (
            <NavLink to={ path }
              className='nav-link-item'
              activeClassName='nav-link-item nav-selected'
              key={index}
              >
              <span>{ linkNames[index] }</span>
            </NavLink>
          ))
        }
      </div>
      <NewPlaylistButton isButtonVisible={isButtonVisible} />
    </nav>
  );
}
