import React from 'react';
import { NavLink } from 'react-router-dom';

export default function(props) {
  return (
    <nav className="browse-nav-container" style={{ display: "" }}>
      <div className="browse-nav">
        {
          props.pathNames.map( (path, index) => (
            <NavLink to={ path }
              className='nav-link-item'
              activeClassName='nav-link-item nav-selected'
              key={index}
              >
              <span>{ props.linkNames[index] }</span>
            </NavLink>
          ))
        }
      </div>
    </nav>
  );
}
