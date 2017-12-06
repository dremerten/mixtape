import React from 'react';

export default function(props) {
  return(
    <div className='dropdown-container hidden'>
      <ul className='dropdown-list'>
        { props.listItems }
      </ul>
    </div>
  );
}
